const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

const loadEventListeners = () => {
    document.addEventListener('a', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks)
};

const addTask = (e) => {
    if (taskInput.value === '') {
        alert('Add Task');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    console.log(link);
    li.appendChild(link);
    taskList.appendChild(li);
    persistTask(taskInput.value);
    taskInput.value = '';
    e.preventDefault();
};

const removeTask = (e) => {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            deleteTask(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.remove();
        }
    }
};

const clearTasks = (e) => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    purgeTasks();
};

const filterTasks = (e) => {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach((task) => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
};

const persistTask = (task) => {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const deleteTask = (taskItem) => {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const purgeTasks = () => {
    localStorage.clear();
};

const getTasks = () => {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        console.log(link);
        li.appendChild(link);
        taskList.appendChild(li);
    });
};


loadEventListeners();
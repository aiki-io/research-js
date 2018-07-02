
let $taskList;
let filter;
let taskInput;

const loadTasks = () => {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
};

const addTask = (task) => {
    renderTask(task);
    const tasks = loadTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const deleteTask = (task) => {
    tasks = loadTasks();
    tasks.forEach((item, index) => {
        if (task == item) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const renderTask = (task) => {
    const li = $(`<li>${task}</li>`).addClass('list-item');
    $taskList.append(li);
    const a = $('<a></a>').addClass('delete-item secondary-content');
    li.append(a);
    const i = $('<i></i>').addClass('fa fa-remove');
    a.append(i);
    a.click(() => {
        if (confirm('Are you sure?')) {
            li.remove();
        }
        deleteTask(task);
    });
};

$(() => {
    const form = $('#task-form');
    const clearBtn = $('.clear-tasks');
    const filter = $('#filter');
    $taskList = $('.collection');
    const taskInput = $('#task');

    form.submit((e) => {
        e.preventDefault();
        if (taskInput.val() === '') {
            alert('Add Task');
        } else {
            addTask(taskInput.val());
            taskInput.val('');
        }        
    });

    clearBtn.click(() => {
        $taskList.empty();
        localStorage.clear();
    });

    filter.keyup(() => {
        const text = filter.val().toLowerCase();
        $.each($('.list-item'), (ndx, el) => {
            if (el.innerText.toLowerCase().indexOf(text)==-1) {
                $(el).hide();
            }
            else {
                $(el).show();
            }

        });

    });

    loadTasks().forEach(renderTask);
});
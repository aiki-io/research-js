// const http = new EasyHttp();

// http.get('https://jsonplaceholder.typicode.com/posts', (err, response) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });

// const data = {
//     title: 'Custom Post',
//     body: 'This is custom post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, (err, response) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, (err, response) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });

// http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });

const http = new EasyHttp();
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.org'
};

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));

const http = new EasyHttp();

// http.get('https://jsonplaceholder.typicode.com/posts', (err, response) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });

const data = {
    title: 'Custom Post',
    body: 'This is custom post'
};

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

http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(response);
    }
});
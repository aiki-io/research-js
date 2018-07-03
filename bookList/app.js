function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {
    UI.prototype.addBookToList = (b) => {
        const $list = $('#book-list');
        const row = $('<tr/>');
        row.html(`<td>${b.title}</td><td>${b.author}</td><td>${b.isbn}</td><td></td>`);
        const td = $('</td>');
        const a = $('<a class="delete">X</a>');
        row.append(td);
        row.append(a);
        ui = new UI();
        $list.append(row);
        a.click(() => {
            row.remove();
            ui.showAlert('Book removed', 'success');
        });

    };
    UI.prototype.clearFields = () => {
        $('#title').val('');
        $('#author').val('');
        $('#isbn').val('');
    };
    UI.prototype.showAlert = (msg, cls) => {
        const errDiv = $('<div/>');
        errDiv.addClass(`alert ${cls}`);
        errDiv.text(msg);
        errDiv.insertBefore($('#book-form'));
        setTimeout(() => {
            errDiv.remove();
        }, 3000);
    };
}


$(() => {
    $('#book-form').submit((e) => {
        e.preventDefault();
        const title = $('#title').val();
        const author = $('#author').val();
        const isbn = $('#isbn').val();
        const book = new Book(title, author, isbn);
        const ui = new UI();
        if (title === '' || author === '' || isbn === '') {
            ui.showAlert('Please fill in all fields', 'error');
        } else {
            ui.addBookToList(book);
            ui.clearFields();
            ui.showAlert('book added', 'success');
        }

    });
});
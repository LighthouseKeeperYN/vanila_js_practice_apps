// book constructor

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// ui constructor

class Ui {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    
    clearFields() {
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('isbn').value = '';
    }
}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => {
            const ui = new Ui;

            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn, index) {
        const books = Store.getBooks();
        
        books.forEach((book) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks);

document.getElementById('book-form').addEventListener('submit', (e) => {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new Ui;

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);

        Store.addBook(book)

        ui.showAlert('Book added', 'success');

        ui.clearFields();
    }
    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', (e) => {
    const ui = new Ui();

    ui.deleteBook(e.target);

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    e.preventDefault();
});
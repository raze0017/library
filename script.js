const but = document.querySelector('.but');
const info = document.querySelector('.added');
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
const boxContainer = document.createElement('div');
boxContainer.classList.add('box-container');

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

const library = [];
const form = document.createElement('form');
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Book:';
const authorLabel = document.createElement('label');
authorLabel.textContent = '   Author:';
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'book');
const authorInput = document.createElement('input');
authorInput.setAttribute('type', 'text');
authorInput.setAttribute('name', 'author');
const pagesLabel = document.createElement('label');
const pagesInput = document.createElement('input');
pagesLabel.textContent = '  pages:';
pagesInput.setAttribute('type', 'number');
pagesInput.setAttribute('name', 'pages');
const textCon = document.createElement('div');
textCon.textContent = 'Did you read this book?:';
textCon.style.fontSize = '12px';
const checkBox = document.createElement('input');
checkBox.setAttribute('type', 'checkbox');
checkBox.classList.add('tick-checkbox');
const space = document.createElement('div');
space.style.marginTop = '10px';
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const bookName = nameInput.value;
  const bookAuthor = authorInput.value;
  const bookPages = pagesInput.value;

  const newBook = new Book(bookName, bookAuthor, bookPages);

  library.push(newBook);

  const card = document.createElement('div');
  card.classList.add('card');

  const bookNameLabel = document.createElement('p');
  bookNameLabel.textContent = `Book: ${newBook.name}`;

  const bookAuthorLabel = document.createElement('p');
  bookAuthorLabel.textContent = `Author: ${newBook.author}`;

  const bookPagesLabel = document.createElement('p');
  bookPagesLabel.textContent = `Pages: ${newBook.pages}`;

  card.appendChild(bookNameLabel);
  card.appendChild(bookAuthorLabel);
  card.appendChild(bookPagesLabel);

  cardContainer.appendChild(card);

  nameInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  info.removeChild(form);
  form.style.display = 'none';
  cardContainer.style.display = 'flex';
});

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(authorLabel);
form.appendChild(authorInput);
form.appendChild(pagesLabel);
form.appendChild(pagesInput);
form.appendChild(textCon);
form.appendChild(checkBox);
form.appendChild(space);
form.appendChild(submitButton);

function displayCardContainer() {
  info.innerHTML = '';
  info.appendChild(cardContainer);
}

submitButton.addEventListener('click', displayCardContainer);
but.addEventListener('click', function () {
  nameInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  boxContainer.style.display = 'flex';
  info.innerHTML = '';
  info.appendChild(boxContainer);
  boxContainer.appendChild(form);
});

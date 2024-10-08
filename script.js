const form = document.getElementById("bookForm");
const toggleButton = document.getElementById("toggleForm");

const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const predefinedBook = new Book(
  "A Song of Ice and Fire",
  "George R. R. Martin",
  694,
  true
);

myLibrary.push(predefinedBook);

function addBookToLibrary(event) {
  event.preventDefault();

  const title = document.getElementById("new-title").value;
  const author = document.getElementById("new-author").value;
  const pages = document.getElementById("new-pages").value;
  const status = document.getElementById("new-read-status").value;

  const newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);

  displayBooks();

  document.getElementById("bookForm").reset();
}

function displayBooks() {
  const library = document.getElementById("library");

  library.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <p>Read?: 
                     <input type="checkbox" id="checkbox-${index}" ${
      book.status ? "checked" : ""
    }>
                    </p>
                    <button onclick="removeBook(${index})">Remove</button>
                `;

    library.appendChild(bookDiv);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

form.addEventListener("submit", addBookToLibrary);

displayBooks();

toggleButton.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    page.style.gridTemplateRows = "200px auto 1fr";
  } else {
    form.classList.add("hidden");
    page.style.gridTemplateRows = "200px 0 1fr";
  }
});

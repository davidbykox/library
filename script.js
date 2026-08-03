const myLibrary = [];

class Book {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
  info() {
    return `${this.title} was written in ${this.year}`;
  }
}

function addBookToLibrary(title, year) {
  let book = new Book(title, year);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
}

let cont = document.getElementById("container");

function loop(array) {
  container.innerHTML = "";
  array.map((el) => {
    let para = document.createElement("p");
    para.id = el.id;
    para.textContent = el.info() + " ";
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.setAttribute("data-target-id", para.id);
    del.addEventListener("click", (e) => {
      let targetEl = document.getElementById(para.id);
      targetEl.remove();
    });
    para.appendChild(del);
    container.appendChild(para);
  });
}

addBookToLibrary("Harry", 1200);
addBookToLibrary("Potter", 1300);

loop(myLibrary);

let form = document.querySelector("form");
let btnToggler = document.getElementById("toggler");
btnToggler.addEventListener("click", (e) => {
  form.hidden = !form.hidden;
});

let inputTitle = document.getElementById("title");
let inputYear = document.getElementById("year");
let btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", (e) => {
  let titl = inputTitle.value;
  let year = inputYear.value;
  addBookToLibrary(titl, year);
  loop(myLibrary);
  e.preventDefault();
});

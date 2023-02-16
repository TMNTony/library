let myLibrary = []



  
const addBookToLibrary = (ev)=>{
    ev.preventDefault();
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        status: document.getElementById('status').value
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBookToLibrary);
});
const theHobbit = new Book("The Hobbit by J.R.R. Tolkein", "295 pages", "yes")
console.log(theHobbit.info())
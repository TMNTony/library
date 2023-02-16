let myLibrary = []

const addBookToLibrary = (ev)=>{
    ev.preventDefault();
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        status: document.getElementById('status').value
    }
    myLibrary.push(book)
    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBookToLibrary);
});
console.log(myLibrary)
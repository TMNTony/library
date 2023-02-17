let myLibrary = []

function book(title, author, read){
    this.title = title
    this.author = author
    this.read = read
}



function addBookToLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector('#read').checked;
    let newBook = new book(title, author, read)
    myLibrary.push(newBook)
    buildTable();
    document.forms[0].reset();
}

function buildTable(){
    let table = document.getElementById('myTable')
    table.innerHTML =''
    for (let i = 0; i < myLibrary.length; i++){
        let row = `<tr>
                        <td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].read}</td>
                        <td><button onclick="removeBook(${i})">Remove</button></td> 
                  </tr>`
        table.innerHTML += row
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    buildTable();
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', function(e){
        e.preventDefault();
        addBookToLibrary();
    });
});
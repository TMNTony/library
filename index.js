var myLibrary = []

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

buildTable(myLibrary)


function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].title}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].status}</td>
                  </tr>`
        table.innerHTML += row


    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBookToLibrary);
});

// {'title':'The Hobbit', 'author':'Tolkein', 'status':'Read'}
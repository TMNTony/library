let myLibrary = []


function Book(title, pages, status) {
    this.title = title
    this.pages = pages
    this.status = status
    this.info = function() {
        return (
            [title, pages, status]
        )
    }
}
  
function addBookToLibrary() {
    // do stuff here
}

const theHobbit = new Book("The Hobbit by J.R.R. Tolkein", "295 pages", "yes")
console.log(theHobbit.info())
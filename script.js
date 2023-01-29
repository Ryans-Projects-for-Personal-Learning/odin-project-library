let library = [];

function preventDefault(event){
    event.preventDefault();

    let newBook = new Book(document.getElementById('author').value, document.getElementById('title').value, document.getElementById('numPages').value);

    addBookToLibrary(newBook);
}

//Constructor
function Book(author, title, numPages){
    this.id = library.length+1;
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.status = "Unread";

    console.log("Book created: (" + author + ", " + title + ", " + numPages + ", " + this.status);
}

function addBookToLibrary (book){
    library.push(book);
    console.log(library);

    let bookTable = document.getElementById("bookTable");

    let row = bookTable.insertRow(-1);

    row.id = "row-" + (library.length);

    let authorCell= row.insertCell(0);
    let titleCell = row.insertCell(1);
    let numPagesCell = row.insertCell(2);
    let statusCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    authorCell.innerText = book.author;
    titleCell.innerText = book.title;
    numPagesCell.innerText = book.numPages;
    statusCell.innerHTML = "<button id=" + "'" + "button-" + library.length + "'" + "onclick=changeStatus(" + "'" + "button-" + library.length + "'" + ")>Unread</button>";
    deleteCell.innerHTML = "<button onclick=deleteBook(" + "'" + "row-" + library.length + "'" + ")>Delete</button>";
}

function changeStatus(buttonID){
    let bookID = buttonID.slice(7);
    console.log(typeof bookID);

    if(document.getElementById(buttonID).innerText === "Unread"){
        document.getElementById(buttonID).innerText = "Read";
    }
    else if(document.getElementById(buttonID).innerText === "Read"){
        document.getElementById(buttonID).innerText = "Unread";
    }

    let bookIndex = library.findIndex((obj => obj.id == bookID));
    console.log("Found at index " + bookIndex);
    library[bookIndex].status = document.getElementById(buttonID).innerText;

    console.log(library[bookID]);

}

function deleteBook(rowID){
    console.log(rowID);
    document.getElementById(rowID).outerHTML = "";

    let bookID = rowID.slice(4)-1;
    console.log(bookID);

    for(let i=0; i < library.length; i++){
        if(library[i].id === bookID){
            library.splice(i,2);
            break;
        }
    }

}

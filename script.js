let bookArray = []

var output = document.getElementById("bookOutput")

function addBook(){
    let book = {
        tittle:"",
        autor:"",
        genre:"",
        publishedYear:"",
    }

    book.tittle = document.getElementById("tittleInput").value
    book.autor= document.getElementById("autorInput").value
    book.genre= document.getElementById("genreInput").value
    book.publishedYear= document.getElementById("publishedYearInput").value

    bookArray.push(book)

    displayBook()
}

 function displayBook(){
    
    
    console.log(bookArray);
    
    for(let i = 0; i < bookArray.length; i++){
        output.innerHTML += bookArray[i].tittle + " " + bookArray[i].autor + " " + bookArray[i].genre + " " + bookArray[i].publishedYear

    }
    
 }

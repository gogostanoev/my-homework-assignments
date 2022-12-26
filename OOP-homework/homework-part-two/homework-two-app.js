console.log("--- Homework part #2 ---");



// Write a JavaScript program to display the reading status of some book. The object should the next properties:
// title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML





function Book(bookTitle, bookAuthor, readingStatus){

    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.readingStatus = readingStatus;

    this.validateStatus = function(){
        if(readingStatus === true){
            return `Already read ${this.bookTitle} by ${this.bookAuthor}`
        }else {
            return `You still need to read ${this.bookTitle} by ${this.bookAuthor}`
        }
    }
}



let firstBook = new Book("'The Robots of dawn'", "Isaac Asimov", true);

let secondBook = new Book("'Around the World in Eighty Days'", "Jules Verne", true);

let thirdBook =  new Book("'Mockingjay: The Final Book of The Hunger Games'", "Suzanne Collins", false);


console.log(firstBook.validateStatus());
console.log(secondBook.validateStatus());
console.log(thirdBook.validateStatus());
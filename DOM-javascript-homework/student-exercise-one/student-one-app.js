console.log("--- STUDENT EXERCISE #1");

// The getElementById() method returns an element with a specified value
// NOTE. If you input an element that does not exist, the method will return a null value
// It is also the most common used to read or edit an HTML element
let firstDiv = document.getElementById("first");
console.log(firstDiv);


// The getElementsByTagName() method returns a collection of child elements with a given tag name
// The getElementsByTagName() method returns a NodeList object
/* 
   NOTE. NodeList is an array-like collection of Node Objects
   The nodes can be accessed by index starting from 0
   As the principle with the length property, when used it returns
   number of elements in an array, it works the same with the 
   NodeList. It returns the number of nodes from it
*/
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);


// The previousElementSibling property returns the previous element in the same tree level
// NOTE. The property is read-only
let lastChildDiv = document.getElementsByTagName("body")[0].lastElementChild;
console.log(lastChildDiv);


// The previousElementSibling property returns the previous element in the same tree level
// NOTE. The property is read-only
let previousLastChild = lastChildDiv.previousElementSibling;
console.log(previousLastChild);



let headerThree = previousLastChild.getElementsByTagName("h3")[0];
console.log(headerThree);



let previousHeader = headerThree.previousElementSibling;
console.log(previousHeader);


// The getElementsByClassName() method returns a collection of elements with a specified class name
// he getElementsByClassName() method returns an HTMLCollection (an array)
// and because it acts almost like an array we use the index[0] to access the node

// The innerText property sets or returns the text content of an element
let paragraphSecond = document.getElementsByClassName("paragraph second")[0];
let paraSecText = paragraphSecond.innerText;
console.log(paraSecText);


// The querySelector() method returns the first element
// It is not commonly used
let changedText = document.querySelector("text");
changedText.innerText += " text";
console.log(changedText);


headerThree.innerText = "I have achieved my goal :D!";
console.log(headerThree);


previousHeader.innerText = "I will completely ruin the code!"
console.log(previousHeader);


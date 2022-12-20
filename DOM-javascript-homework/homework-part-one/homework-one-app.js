console.log("--- Homework Part #1");


let myTitle = document.getElementById("myTitle");
console.log(myTitle);


myTitle.innerText = "It's time to practice some coding !!"
console.log(myTitle.innerText);


let paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);


let firstParagraph = paragraph[0];
console.log(firstParagraph);

firstParagraph.innerText = "The new lessons started to be interesting all of a sudden :O"
console.log(firstParagraph.innerText);

let secondParagraph = paragraph[1];
console.log(secondParagraph);

secondParagraph.innerText = `I kinda got stuck on this one because using
.nextElementSibling would give me null, while .nextSibling would redirect me
to the text even though I've selected them by class`
console.log(secondParagraph.innerText);

let bolderParagraph = secondParagraph.style.fontWeight = "bold";


let lastDiv = document.getElementsByTagName("body")[0].lastElementChild
console.log(lastDiv);

let lastHeader = lastDiv.previousElementSibling;
console.log(lastHeader);


let actualLastHeader = lastHeader.getElementsByTagName("h3")[0];
console.log(actualLastHeader);

actualLastHeader.innerText = "Changed this!"
console.log(actualLastHeader.innerText);
actualLastHeader.style.fontSize = "larger";


let beforeActualLastHeader = actualLastHeader.previousElementSibling;
console.log(beforeActualLastHeader);

beforeActualLastHeader.innerText = "Alright, as you wish :D";
console.log(actualLastHeader.innerText);
beforeActualLastHeader.style.color = "blue";
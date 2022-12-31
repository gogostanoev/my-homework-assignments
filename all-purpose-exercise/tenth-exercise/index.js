console.log("Exercise #10");



// Make a TODO app for yourself. You should have only one input and “Add” button. After clicking on the Add button, display the newly added task that you need to do in an unordered list. Each new todo should be saved into an array.
// Bonus: Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross trough the text! Try making the ToDo an object that needs to have two properties: Name and isCompleted properties




/* 
  I select the elements from the HTML with the id selector and for better documentation I declare the variable as the same name as the ID.

  I declare a variable and assign an empty array so I can store the objects/elements inside it at a later point

  I create a function with two parameters, one for the input and one for a container where I will print out them

  .innerHTML is used to put data inside the HTML and here elementToPrintIn.innerHTML = "", it clears the element we would to print in
  so we don't have multiplied data

  I declare a variable that will create an unordered list right before the iteration

  appendChild appends(meaning it adds/attaches data/node to the end of the document) the unorderedList

  I create an iteration of tasksToDo so it iterates through every data in the input

  The "+=" adds something to a variable and stores the result in that variable (x += 2) == (x = x + 2)

  I create the list from the "ul" element and inside I store the current iteration of the input data


  I create an event listener for the button. Inside I declare a variable and assign it to the value of the input.
  .value is a property used to get the CURRENT value inside the input

  I use the variable with empty array to push inside the values of the input

  I invoke the function inside the button so it works as intended.
*/



let inputOne = document.getElementById("inputOne");

let addButton = document.getElementById("addButton");

let divContainer = document.getElementById("divContainer");


let toDo = [];


function displayTask(tasksToDo, elementToPrintIn){

    elementToPrintIn.innerHTML = "";

    let unorderedList = document.createElement("ul")

    elementToPrintIn.appendChild(unorderedList)

    for(let i = 0; i < tasksToDo.length; i++){

        unorderedList.innerHTML += 
        `
        <hr />
        <li> ${tasksToDo[i]} </li>
        `
    }
}


addButton.addEventListener("click", function(){

    let valueOfInput = inputOne.value;

    toDo.push(valueOfInput);
    displayTask(toDo, divContainer)
})
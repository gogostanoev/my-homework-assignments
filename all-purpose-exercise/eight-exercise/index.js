console.log("Exercise #8");



// Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!


// ex: storyTeller(who, what, when);

// In the function, retrieve the current values of the form input elements, make a story from them, 
// and output that in the story div (like "Example: Lancelot was a really strong knight in the middle age!")





let who = document.getElementById("who");

let what = document.getElementById("what");

let when = document.getElementById("when");

let clickButton = document.getElementById("clickButton");

let printStoryTime = document.getElementById("printStoryTime");


function storyTeller(whoInput, whatInput, whenInput){

    printStoryTime.innerHTML += `<h3> ${whoInput} is losing his mind
    on ${whatInput} at ${whenInput} in the morning. </h3>`
}


clickButton.addEventListener("click", function(){

    printStoryTime.innerHTML = ""
    
    storyTeller(who.value, what.value, when.value);

})


// Please add "Gogo", "coding" and "02:00" for better immersion.
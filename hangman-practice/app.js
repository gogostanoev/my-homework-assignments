console.log("connected");


// HEAVY DOCUMENTATION
// This is the code for the game "Hangman" in JavaScript
// I will be writing a thorough step by step documentation so I understand everything when I open this again


//*** Step #1. I need to declare variables with unique names so they don't conflict each other and initialize them with values

/* I created an array with all the letters so I can use them later to create buttons so the user can click on them and display them */
let wholeAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"];

/* Firstly, I created an array that will display buttons of four 4 different categories. In each of those buttons it will have the corresponding
guesses for the player. For example, if he clicks on the button "Countries" he will have to guess one of the 4 words for that category. 
Same applies to the rest of them */
let differentCategories = ["Countries", "Movies", "Video Games", "Food"];

let countryCat = ["Indonesia", "Poland", "Macedonia", "Andorra"];

let moviesCat = ["Terminator", "Split", "Godfather", "Robocop"];

let videoGamesCat = ["Portal", "Doom", "Sonic", "Minesweeper"];

let foodCat = ["Sarma", "Hamburger", "Rice", "Eclair"];



/* Secondly I created 4 variables with arrays that will correspond to the previous guesses as hints */
let hintCountry = ["It is considered a tropical land", "It is home to the world's biggest castle",
"Alexander the Great is from here", "It is between Spain and France"];

let hintMovie = ["'I will be back'", "A man struggling with dissociative identity disorder", "Most famous crime movie",
"From human he was made a robot"];

let hintVideoGame = ["You use portals", "You kill a lot of demons", "You are a hedgehog",
"A windows game with bombs"];

let hintFood = ["George's favorite food", "It has the same name as a city in Germany",
"It is mainly consumed in Asia", "This dessert originates from France"];

/* Here I created variables with empty strings and empty arrays that will help the functions below and I will explain why they are needed
once we get to that function */
let letter = "";

let helperOne = "";
let helperTwo = "";
let helperThree = "";

let correctGuess = "";

let emptySpace = [];

let clickedLetters = [];

let wrongGuess = 0;

/* I've selected all the necessary elements with the DOM selectors */
let buttonLetters = document.getElementById("buttonLetters");
let categoryElement = document.getElementById("categoryElement");

let gameDiv = document.getElementById("gameDiv");
let letterContainer = document.getElementById("letterContainer");
let gameState = document.getElementById("gameState");
let containerClue = document.getElementById("containerClue");

let displayHangman = document.getElementById("displayHangman")

let countryButton = document.getElementById("countryButton");
let movieButton = document.getElementById("movieButton");
let vgButton = document.getElementById("vgButton");
let foodButton = document.getElementById("foodButton");


let hintButton = document.getElementById("hintButton");
let playButton = document.getElementById("playButton");

// *** Step #2.

/* I need to display the letters as clickable buttons. So in order to do everything from scratch I created a function called displayLetters 
and will accept a parameter called elementToPrint. 

Then after that I create an event listener for the buttons so they can function and work as any button. When the button is clicked  */ 
function displayLetters(elementToPrint) {
    
    // I've set the .innerHTML property of elementToPrint to an empty string so it doesn't create multiple copies of the letters.
    elementToPrint.innerHTML = "";
    
    // I've created a variable that will create an unordered list.
    let unorderedList = document.createElement("ul"); 
   
    // After that I made a for loop that will iterate through the wholeAlphabet (all the letters)
    for (let i = 0; i < wholeAlphabet.length; i++) {

        // and inside it it will create a list
        let letterList = document.createElement("li")

        // and a button for each letter.
        let buttonList =  document.createElement("button")

        // Then inside the buttons with .innerHTML property I've added h2 tags and inside them 
        // I've added the current iteration of the wholeAlphabet where the display of the buttons happen.
        buttonList.innerHTML += `
        <h2> ${wholeAlphabet[i]} </h2> `

        // I create an event listener for the button so it will function as any button should, with "click" event and an anonymous function
        buttonList.addEventListener("click", function (){

            // If you haven't clicked on a category, don't execute the function
            if(helperOne === "") return 

            // If you make 9 wrong guesses then return the value, meaning this will make sure after you lose YOU CAN'T CLICK THE BUTTONS and display them
            if(wrongGuess === 9) return
    

            // If you press the letter that is contained in the current iteration, don't execute the rest of the function
            if(clickedLetters.includes(wholeAlphabet[i])){

                return 

            // Otherwise make the letter background fully opaque
            }else {

                buttonList.style.opacity = '100%'
            }

            // letter is an empty string so what I have done here is I assign every letter to the letter and display them
            letter = wholeAlphabet[i];

            // I call out a function here, refer to it below where it is created
            correctLetter(helperOne, letter)

            // I call out a function here, refer to it below where it is created
            letterBox()

            // clickedLetters is an empty array. Here on each addition we push the current iteration of wholeAlphabet inside the empty array
            clickedLetters.push(wholeAlphabet[i])

            // Same as above but here it is only specified on the CSS property of the letters
            if(clickedLetters.includes(wholeAlphabet[i])){

                buttonList.style.opacity = '60%'

            }else {

                buttonList.style.opacity = '100%'
            }

        })

        // The appendChild() method appends a node (element) as the last child of an element. Basically buttonList is set as a last child of the letterList
        letterList.appendChild(buttonList);

        // And here letterList will be set as a last child to unorderedList
        unorderedList.appendChild(letterList);
    }

    // Unordered list will be set as a last child to elementToPrint. With all the appends it will look something like this
    /* 
    <ul><li><button>  </button></li></ul>
    */
    elementToPrint.appendChild(unorderedList);

}


// Here I call out the function
displayLetters(buttonLetters);



// *** Step #3.

/* I create a function called wordChooser that will accept 2 parameters and it's purpose is to make the category and hint to be selected randomly
rather than linear from the 1st do the last element.
*/ 
function wordChooser(categoryArray, hintArray) {

    /* 
    The Math.floor() method rounds a number DOWN to the nearest integer while Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
    Math.random() used with Math.floor() can be used to return random integers.
    */
    let testOne = Math.floor(Math.random() * categoryArray.length)
  
    // Here helperOne and helperTwo are empty strings so we assign them the category along with the hint as a sort of a container
    helperOne = categoryArray[testOne]
    helperTwo = hintArray[testOne]
}



// *** Step #4. I created 4 different event listeners for the category buttons

countryButton.addEventListener("click", function () {

    //  I call out the previous function that I explained with the random selection
    wordChooser(countryCat, hintCountry);

    // Inside the HTML of the categoryElement I will write the category that is corresponding to the name of the button
    categoryElement.innerHTML = `The category is Countries`

    // For better explanation go down and see what this function does and come back here
    emptyField()

    // Same with this
    disableButtons()

    // And this
    letterBox()
})


// The explanation for the first button applies here, only the name of the button and the name of the category is different
movieButton.addEventListener("click", function () {

    wordChooser(moviesCat, hintMovie);

    categoryElement.innerHTML = `The category is Movies`

    emptyField()

    disableButtons()

    letterBox()
})


// The explanation for the first button applies here, only the name of the button and the name of the category is different
vgButton.addEventListener("click", function () {

    wordChooser(videoGamesCat, hintVideoGame);

    categoryElement.innerHTML = `The category is Video Games`

    emptyField()

    disableButtons()

    letterBox()

})


// The explanation for the first button applies here, only the name of the button and the name of the category is different
foodButton.addEventListener("click", function () {
  

    wordChooser(foodCat, hintFood);

    categoryElement.innerHTML = `The category is Food`

    emptyField()

    disableButtons()

    letterBox()

})


// *** Step #5

/* 
The fill() method fills specified elements in an array with a value.

The fill() method overwrites the original array.

Start and end position can be specified. If not, all elements will be filled.

So here emptySpace is an empty array and with the fill() method I am filling it with an underscore "_" that is as long as the chosen word,
giving the visual presentation to the user that he needs to guess the word
*/
function emptyField(){

    emptySpace = new Array(helperOne.length).fill('_');

}



// This function is closely tied to the previous one
function letterBox() {

    // I've set the .innerHTML of letterContainer to an empty string so it does not make a copy of the "_" whenever I click a letter
    letterContainer.innerHTML = "";

    // I create a variable and assign it to create an unordered list
    let unorderedListDash = document.createElement("ul")

    // I use a for loop that will iterate through the emptySpace
    for (let i = 0; i < emptySpace.length; i++) {

        /* And inside unorderedListDash (ul) I make an addition of the current iteration of emptySpace meaning the "_" will be
        created as long as the length of the word is
        */
        unorderedListDash.innerHTML += `<li> ${emptySpace[i]} </li`

    }

    // unorderedListDash is set as a last child to unorderedListDash meaning the "_" will be inserted the empty string
    letterContainer.appendChild(unorderedListDash)

}


// *** Step #6

// I created a function called disabledButtons and what it will do is, once you click a specific category button, it disables all the other category buttons
function disableButtons() {

    // For all the category buttons I add .disabled property and set a boolean value to true, meaning they will disabled once one of the is clicked
    countryButton.disabled = true
    movieButton.disabled = true
    vgButton.disabled = true
    foodButton.disabled = true
}


// I create an event listener for the hintButton 
hintButton.addEventListener("click", function(){

    // I make an if statement where helperTwo (an array with hints) is equal to an empty string then don't execute the rest of the function
    if(helperTwo === "") return

    // Inside the containerClue I add the clue or hint that is corresponding to the selected category
    containerClue.innerHTML = `Clue - ${helperTwo}`  
})


// I create one more event listener for the playButton
playButton.addEventListener("click", function (){

    // I set the buttons to a boolean value false, meaning it enables the buttons
    countryButton.disabled = false
    movieButton.disabled = false
    vgButton.disabled = false
    foodButton.disabled = false

    // Here I added all the empty strings and arrays from the global scope so the playButton resets everything every time you click on it
    emptySpace = [];
    helperOne = "";
    helperTwo = "";
    helperThree = "";
    letter = "";
    wrongGuess = 0;
    categoryElement.innerHTML = "";
    gameState.innerHTML = "";
    displayHangman.innerHTML = "";
    containerClue.innerHTML = "";

    letterContainer.innerHTML = "";

    clickedLetters = [];

    // I call out the function to reset the letters
    displayLetters(buttonLetters)
})



// *** Step #7

// I create a function called correctLetter that will accept two parameters 
function correctLetter(word, chosenLetter) {

    // I transform the parameter "word" to all uppercase letters
    word = word.toUpperCase()

    // I use the if statement to check if the word doesn't include the values from chosenLetter
    if(!word.includes(chosenLetter.toUpperCase())){

        // I increase wrongGuess every time I make a wrong guess
        wrongGuess++

        // I call out the function, refer to the end of the code
        drawHangMan()

        return
    }

    // I use for statement to iterate through the parameter "word" 
    for (let i = 0; i < word.length; i++) {
        // and if the current iteration is equal to the values of chosenLetter
        if (word[i] === chosenLetter.toUpperCase()) {

            // then the current value of emptySpace is assigned to chosenLetter
            emptySpace[i] = chosenLetter
            // I call out the function that is created below
            arrayToString()

        } 
    }


    // I call out the function for drawing the hangman
    drawHangMan()

}


// I create a function arrayToString
function arrayToString(){

    /* 
    The join() method returns an array as a string.

    The join() method does not change the original array.

    Any separator can be specified. The default is comma (,).

    The helperThree variable is assigned to emptySpace with join() Method, morav da iskoristam bidejki praveshe gadni problemi so dolnata funkcija za hangman
    */
    helperThree = emptySpace.join("")
}





// *** Step #8

// Here I create a function called drawHangMan and inside I create the switch statements for win/lose state of the game
function drawHangMan(){


    if(helperOne === "") return

    switch (true){

        case(helperOne.toUpperCase() === helperThree.toUpperCase()):

            gameState.innerHTML = `You have won! Great job.`

        break

        case (wrongGuess === 1):

            gameState.innerHTML = `You have 8 lives left`

            displayHangman.innerHTML = `
            |       
            |       
            |      
            |      
            |
            |`
        break
        case (wrongGuess === 2):

        gameState.innerHTML = `You have 7 lives left`

            displayHangman.innerHTML = `
            _________
            |       
            |       
            |      
            |      
            |
            |`
        break
        case (wrongGuess === 3):

            gameState.innerHTML = `You have 6 lives left`
         
            displayHangman.innerHTML = `
            _________
            |       |
            |       
            |      
            |      
            |
            |`
        break
        case (wrongGuess === 4):

            gameState.innerHTML = `You have 5 lives left`

            displayHangman.innerHTML = `    
            _________
            |       |
            |       0
            |      
            |      
            |
            |`
        break
        case (wrongGuess === 5):

            gameState.innerHTML = `You have 4 lives left`  

            displayHangman.innerHTML = `
            _________
            |       |
            |       0
            |       |
            |      
            |
            |`
        break
        case (wrongGuess === 6):

            gameState.innerHTML = `You have 3 lives left` 

            displayHangman.innerHTML = `
            _________
            |       |
            |       0
            |      /|
            |      
            |
            |`
        break
        case (wrongGuess === 7):

            gameState.innerHTML = `You have 2 lives left`

            displayHangman.innerHTML = `
            _________
            |       |
            |       0
            |      /|\
            |      
            |
            |`
        break
        case (wrongGuess === 8):

             gameState.innerHTML = `You have 1 life left`
         
            displayHangman.innerHTML = `
            _________
            |       |
            |       0
            |      /|\
            |      / 
            |
            |`
        break
        case (wrongGuess === 9):

            gameState.innerHTML = `You've lost. Better luck next time!`

            displayHangman.innerHTML = `
            _________
            |       |
            |       0
            |      /|\
            |      / \
            |
            |`
        break
    }
}
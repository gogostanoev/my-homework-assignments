console.log("--- STUDENT EXERCISE #2 ---");

console.log("TEMPERATURE CONVERTER");


// 1. Administer the keyword "function", give it a name and write statements that are needed to execute a task
// 2. We add a parameter name.
// 3. Because we are converting from celsius to fahrenheit, we need to declare a variable and initialize it's value with a result from math. operations
// 4. We ask the user to input a celsius value so we use the prompt() method
// 5. We add the "return" keyword just in case we need the value for later purposes











function celsiusToFah(celsiusValue){

    let resultFah = (celsiusValue * 1.8) + 32;
    console.log(`The converted Fahrenheit degree is: ${resultFah}`);

    return resultFah;
}

celsiusToFah(10);


function fahrenheitToCel(fahrenheitValue){

    let resultCel = (5 / 9) * (fahrenheitValue - 32);
    console.log(`The converted Celsius degree is: ${resultCel}`)

    return resultCel;
}

fahrenheitToCel(50.5)



let userType = prompt("Enter Fahrenheit or Celsius");
let userInput = parseFloat(prompt("Please write the number:"));

let fahSumResult = (userInput * 1.8) + 32;

let celSumResult = (5 / 9) * (userInput - 32);

if(userType === "Fahrenheit"){
        console.log("The result is: ", fahSumResult, "Fahrenheit");
}else if (userType === "Celsius"){
        console.log("The result is: ", celSumResult, "Celsius");
}else {
    console.log("ERROR, PLEASE TRY AGAIN");
}

console.log(Number.isNaN(userType)); // false
console.log(Number.isNaN(userInput)); // false



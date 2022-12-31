console.log("Exercise #4");



// Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!

// Make sure you use a function!

// Ex. Input1: 20
// Input2: 80
// Output: 80 is closer to 100



let numOne = 55;
let numTwo = 28;

function checkBiggerNumber(firstNumber, secondNumber){

    if(firstNumber < 0 || secondNumber < 0){
        
        return alert(`The number is a negative one, enter a number that has a higher value than 0`);
    }

    let controlledNumberOne = 100 - firstNumber;

    let controlledNumberTwo = 100 - secondNumber;

    if(controlledNumberOne > controlledNumberTwo){
        
        return `The number ${controlledNumberOne} is the closest to 100`
    }
    else{
        
        return `The number ${controlledNumberTwo} is the closest to 100`
    }

}

let finalResult = checkBiggerNumber(numOne, numTwo);
console.log(finalResult);
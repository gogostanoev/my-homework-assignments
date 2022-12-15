console.log("--- First Student Exercise");



// 1. I will write a function that is called findNumber => DONE
// 2. The function will accept two parameters: number and array => DONE
// 3. I should write a code that calculates how many times the number is contained in an array of numbers => DONE
// 4. I should print out the result "There is an x occurrences of number y in the array" => DONE
// 5. I should call the function three times  => DONE





function findNumber(number, array){

    let occurrences = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] === number){    

            occurrences++;
        }

    }
    return occurrences;
}

let userInput = parseFloat(prompt("Please enter a number:"));

let firstArrayNumbers = [1, 8, 5, 4, 6, 4, 5, 5, 3, 9, 5,];
console.log(`There are ${findNumber(userInput, firstArrayNumbers)} occurrences of ${userInput} in the array!`);

let secondArray = [10, 20, 10, 30, 10];
console.log(`There are ${findNumber(userInput, secondArray)} occurrences of ${userInput} in the array!`);

let thirdArray = [22.5, 100, 239, 22.5, 90.8, 100, 22.5, 40, 22.5, 22.56];
console.log(`There are ${findNumber(userInput, thirdArray)} occurrences of ${userInput} in the array!`);
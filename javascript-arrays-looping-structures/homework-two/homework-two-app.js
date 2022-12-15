console.log("--- Homework #2 ---");

// 1. I will write a function called sumOfNumbers => DONE
// 2. The function will accept a parameter called arrayFiveNumbers => DONE
// 3. I should add a looping structure => DONE
// 4. I should calculate the sum of all the numbers inside the array and return the value. => DONE
// 5. I should print out the value. => DONE


function sumOfNumbers(arrayFiveNumbers){

    let sum = 0;

    for(let i = 0; i < arrayFiveNumbers.length; i++){

        sum += arrayFiveNumbers[i];
    }
    return sum;
}




let someArrayNumbers = [4, 9, 3, 12, 5];

console.log(`The sum is ${sumOfNumbers(someArrayNumbers)}`);









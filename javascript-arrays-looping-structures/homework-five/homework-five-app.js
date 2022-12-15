console.log("--- Homework #5 ---");


// 1. I will write a function called maxMinNumbers => DONE
// 2. The function will accept parameter of array with numbers => DONE
// 3. I will build a loop structure, and iterate through all the numbers from the array => DONE
// 4. I will set a condition to find the maximum and minimum value of all the present numbers => DONE
// 5. I will sum both their values and return it => DONE
// 6. I will print out the result => DONE





function maxMinNumbers(arrayOfNumbers){

    let maxNumber = arrayOfNumbers[0];
    let minNumber = arrayOfNumbers[0];

    for(let i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] > maxNumber){
            maxNumber = arrayOfNumbers[i];

        }else if(arrayOfNumbers[i] < minNumber){

            minNumber = arrayOfNumbers[i];
        }
        
        

    }  return maxNumber + minNumber;
} 




let newArrayNumbers = [40, 29, 15, 84, 10, 80, 59, 95, 49, 20];

console.log("The result it", maxMinNumbers(newArrayNumbers));
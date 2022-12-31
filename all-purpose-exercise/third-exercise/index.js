console.log("Exercise #3");


//  Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.

// Make sure you use a function!


// Ex. Input: 20 ==> Output: 14




function sumOfNumbers(exerciseNumber){

    if(exerciseNumber > 13){
        
        let result = exerciseNumber - 13
        
        return result * 2;
    }
    else{
        console.log("Incorrect, please type a number that is higher than 13")
    }

}

let finalResult = sumOfNumbers(23);
console.log(finalResult);
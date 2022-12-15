console.log("--- Student Exercise Two ---");


// 1. First I will create a function called findNumber => Done
// 2. The function will accept two parameters: array and type => Done
// 3. I should declare an empty variable => DONE
// 4. I should set up a looping structure => DONE
   /* I should declare and initialize two variables, one for even numbers, one for odd => DONE
      I should write an if statement, if the number is even, assign it to even type, same principle with odd => DONE
   */
// 



function findNumber(arrayNumber, typeNumber){

    let someValue = [];

    if(typeNumber === "even"){
        for(let i = 0; i <= arrayNumber.length; i++){
            if(i % 2 === 0){
                someValue.push(i);
            }
        }
        return someValue;

    }else if(typeNumber === "odd"){
        for(let i = 0; i <= arrayNumber.length; i++){
            if(i % 2 != 0){
                someValue.push(i);
            }
        }
        return someValue;
    }
        
}

let mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let typeEvenNum = "even";
let typeOddNum = "odd";

console.log(`These numbers ${findNumber(mixedNumbers, typeEvenNum)} are even`);
console.log(`These numbers ${findNumber(mixedNumbers, typeOddNum)} are odd`);



// I wanted to try with the for loop and iterator but I needed to add one more iterator at the "else if" because I got an error saying the i was undefined
// Below is the example with the last loop we learned at class but I prefer the one above.




// function findNumber(array, type){
    
//     let someValue = [];

//     if(type === "even"){
//         for(let num of array){
//             if(num % 2 === 0){
//                 someValue.push(num);
//             }
//         }
//         return someValue;

//     }else if(type === "odd"){
//         for(let num of array){
//             if(num % 2 != 0){
//                 someValue.push(num);
//             }
//         }
//         return someValue;

//     }

// let mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let typeEvenNum = "even";
// let typeOddNum = "odd";

// console.log(`These numbers ${findNumber(mixedNumbers, typeEvenNum)} are even`);
// console.log(`These numbers ${findNumber(mixedNumbers, typeOddNum)} are odd`);

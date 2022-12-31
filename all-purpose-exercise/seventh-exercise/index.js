console.log("Exercise #7");


// Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). 
// Create a function that will work for every array in the world :) and it will remove all the falsy values from the array




let randomArray = [57, "Big Lebowski", true, undefined, "help ME", null, NaN, 0, -13, ""];


function cleansedArray(mixedArray){

    let helperArray = [];
    
    for(let i = 0; i < mixedArray.length; i++){

        if(!!mixedArray[i]){

            helperArray.push(mixedArray[i]);

        }
    }
    return helperArray;
}

console.log(cleansedArray(randomArray));
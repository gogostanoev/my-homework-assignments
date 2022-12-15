console.log("--- Homework #3 ---");


/* 
 1. I will write a function called storyTime => DONE
 2. The function will accept a parameter of an array with strings =>
 3. I should set up an iterator that will go through all the strings and print them out
 4. I should concatenate a string to each of the array with strings
 5. I should return the concatenated value
 6. I should print out the result
*/



function storyTime(arrayOfStrings){

    let concatenatedString = "";

    for(let i = 0; i < arrayOfStrings.length; i++){

        concatenatedString += `${arrayOfStrings[i]}`
        
    }

    return concatenatedString;

}

let storyPiece = storyTime(["Hey", " ", "George", " ", "and", " ", "Aneta,", " ", "we", " ", "should", " ", "go", " ", "out", " ", "drinking", " ", "in", " ", 1, " ", "or", " ", 2, " ", "months!"]);

console.log(storyPiece);




// Below is how I initially did it, but when I saw how George did it I was dumbfounded :D







// function anotherStory(mixedArray){

//     let smallStory = mixedArray[0] + " " + mixedArray[1] + " and " + mixedArray[2] + "," + " we should all go out " + mixedArray[3] + " in about " + mixedArray[4] + " or " + mixedArray[5] + " months, if you are free :D ";

//     console.log(smallStory);
// }



// allPurposeArray = ["Hello", "George", "Aneta", "drinking", 1, 2];

// anotherStory(allPurposeArray);
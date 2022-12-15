console.log("--- Homework #1 ---");

// 1. I will create a function called tellStory => DONE
// 2. The function should accept an array of 3 strings as an argument => DONE
// 3. The function should return one big string with a story made from the arguments => DONE
// 4. Iterate through the array and print all the string values => DONE
// 5. Concatenate to a string each of the values => DONE





function tellStory(arrayOfThree){

    let stringHelper = "";

    for(let i = 0; i < arrayOfThree.length; i++){

        stringHelper += `${arrayOfThree[i]}`

    }

    return stringHelper;
}


let storyArray = tellStory(["Today Gogo woke up and decided to code.", " ", "When he got to the homework he was CONFUSED.", " ", "He thought he knew a bit of coding but it turns out he doesn't."]);

console.log(storyArray)
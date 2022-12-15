console.log("--- Homework #6 ---");



/* 
  1. I will create a function called studentNames => DONE
  2. I will create a parameter that will accept 2 arrays of students firstNames and lastNames => DONE
  3. I will set up an iteration structure and print all the first and last names => DONE
  3.5 I will declare a helper variable and initialize an empty array => DONE
  4. I will concatenate the helper variable with the first and second argument => DONE
  4.5 In the concatenation I will add "i + 1" meaning it will add a numerical value before the names => DONE
  5. I will return whole string concatenation => DONE
  6. I will print out the values => DONE
*/




function studentNames(firstName, lastName){

    let helperName = [];

    for(let i = 0; i < firstName.length; i++){

        helperName += `${i + 1}. ${firstName[i]}  ${lastName[i]}, `   // I could have used \n but I saw that it should look something like "1. Bob Bobski, 2. John Doe"
    }                                                                 // in a horizontal line rather a vertical one

    return helperName;
}






let arrayFirstNames = ["Gorjan", "Martin", "Frosina"];
let arrayLastNames = ["Stanoev", "Janevski", "Stamenkovska"];

console.log(studentNames(arrayFirstNames, arrayLastNames));
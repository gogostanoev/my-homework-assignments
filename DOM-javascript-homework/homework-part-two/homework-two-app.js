console.log("--- Homework Part #2 ---");


// 1. I will create an array of numbers called severalNumbers
// 2. I will create a function that will be called mixedNumberArray
// 3. The function will accept a parameter of an array with numbers
// 4. I will create a looping structure so it goes through all the numbers
// 5. I will create an ul tag with an ID and inside I will print the numbers in a list element
// 6. Below the list I will print out the sum of the numbers.



let severalNumbers = [4, 23, 81, 58, 16, 79, 45, 0, 19, 55];


let nest = document.getElementById("nest");
let result = document.getElementById("result");


function mixedNumberArray(arrayOfNumbers){

    let sum = 0;


    nest.innerHTML = "<h1> I will be attempting to make a working code </h1>"
    nest.innerHTML += "<ul>"

    for(let i = 0; i < arrayOfNumbers.length; i++){
        

        console.log(`${arrayOfNumbers[i]}`)

        nest.innerHTML += `<li> ${arrayOfNumbers[i]} </li>`

        sum += arrayOfNumbers[i];
        
    }

    nest.innerHTML += "</ul>"

    result.innerHTML = `The sum of all the numbers in the array is: ${sum}`;


}



mixedNumberArray(severalNumbers);
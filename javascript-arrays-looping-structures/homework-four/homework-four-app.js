console.log("--- Homework #4 ---");


// 1. I will write a function called evenOddNumbers => DONE
// 2. The function will accept a parameter that will contain a number => DONE
// 3. I need to build a looping structure for the provided numbers and print them out => DONE
// 4. I should check if the numbers are is even or odd on each iteration => DONE
// 5. If the number is either even or odd, I should attach a string to them saying: "number is even" or "number is odd" => DONE
// 6. After the condition is fulfilled I should RETURN THE FLOATING VALUE and print it out. => DONE           I REALLY need to emphasize the "return" keyword to myself


function evenOddNumbers(findNumber){

    let stringConc = "";

    for(let i = 1; i <= findNumber; i++){
        
        if(i % 2 === 0){
                
            stringConc += `${i} is an even number\n`

        }else {

            stringConc += `${i} is an odd number\n`

        }

    }

    return stringConc;

}



let finalResult = evenOddNumbers(20);

console.log(finalResult);
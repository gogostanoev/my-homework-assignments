console.log("--- Student Exercise #2 ---");


// 1. First I will create a function called weightInChickens
// 2. The function will accept a parameter called chickenWeight
/* 
  - For easier understanding, 1 chicken is equal to 0.5 human kilograms
  - So that means, whatever number you input should be divided by 0.5
*/
// 3. I should create a prompt with parseFloat so the user can type his weight
// 4. I should select the element with ID result so I can display the result
// 5. I should establish a condition where if the user has typed a number, the calculation takes effect
// 6. If the user types anything than a number, it should display an error message




function weightInChickens(chickenWeight){

  return chickenWeight / 0.5;
}

let onlyResult = document.getElementById("result");

let userInput = parseFloat(prompt("Enter your exact weight"));
console.log(userInput);

if(!isNaN(userInput)){
  onlyResult.innerHTML = `<h2> You weigh as same as ${weightInChickens(userInput)} chickens! </h2>`
} else {
  onlyResult.innerHTML = `<h2> Error, incorrect input. Please enter a number! </h2>`
}




// function weightInChickens(weight){
//   return weight / 0.5;
// }

// let resultDiv = document.getElementById("result");
// let input = parseInt(prompt("Please enter how much you weigh:"));
// if(!isNaN(input)){
//   resultDiv.innerHTML = `<h3> ${input}KG is ${weightInChickens(input)} <img src="chicken.png" style="height:2vh"></h3>`
// } else {
//   resultDiv.innerHTML = `<h3> Sorry! Wrong input! Refresh the page again! </h3>`
// }
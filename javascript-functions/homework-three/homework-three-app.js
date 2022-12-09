console.log("--- HOMEWORK PART 3 ---");


// 1. I should implement a function a name it relative to task given
// 2. I should add a parameter to it
// 3. I should declare a variable inside the function and initialize it's value (the balance of the user)
// 4. I should implement if statements should the user requests more money
// 5. I should return the value.





let balance = 30000;



function withdrawMoney(){

    userInput = parseFloat(prompt("Please type how much you wish to withdraw"));
    console.log(userInput);

    let moneyResult = balance - userInput;

    if (isNaN(userInput) || userInput === ""){
        alert("Please enter a number!");
        withdrawMoney();
    }else if(userInput > balance){
        console.log("Insufficient funds")
    }else if (moneyResult <= balance){
        console.log(`Your current balance is ${moneyResult}, your withdrawal money is ${userInput}`);
    }
}


withdrawMoney()
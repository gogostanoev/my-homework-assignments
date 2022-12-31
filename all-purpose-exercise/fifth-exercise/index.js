console.log("Exercise #5");


// Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. 
// He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. 
// Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.



let bobSalary = 1000;

let bobRent = 375;

let bobBills = 250;


let totalExpenses = bobRent + bobBills;

let totalAmount = bobSalary - totalExpenses;


console.log(`Currently, Bob has ${totalAmount} euros left`);
console.log(`As for the expenses, he used ${totalExpenses} euros to cover his expenses`);
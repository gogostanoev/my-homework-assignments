let trainerJavaScript = "George";
let assistantJavascript = "Aneta";

// `` these are used to concatenate two or more strings

let introductionHomework = `Hello ${trainerJavaScript} and ${assistantJavascript}.
I hope you are having a good day and you guys are relaxed. Here is my homework.`;

console.log(introductionHomework);


// 1. First declare the variable for the user's current financial stability and initialize it's value.
// 2. Provide two conditions, a simple yes or no answer.
// 3. If it's a yes answer, set a result for it and continue the program.
// 4. It it doesn't fulfil the condition, set another alternative and provide two more conditions for the new alternative. (lowering his current financial stability)
// 5. It the answer is yes, set a different result with the current provided value.
// 6. If the condition is not fulfilled, repeat step 4, or add a new alternative with two more conditions until there is no more room for conditions.



let fridayCash = prompt("Please type your financial balance");
console.log(fridayCash);

let userCash = parseFloat(fridayCash);

// We use "if" to specify a block of code to be executed, if a specified condition is true
// We use "else if" to specify a new condition to test, if the first condition is false
// The parseFloat() method parses a value as a string and returns the first number
// The logical AND (&&) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.


if(userCash>= 50) {
    console.log("You can treat yourself with some fancy dinner and a goood movie");
} else if (userCash >= 35) {
    console.log("You can buy a burger or a normal-priced pizza");
} else if (userCash >= 12) {
    console.log("You should consider going to a movie, you can't afford eating out ");
} else if (userCash > 0 && userCash < 12) {
    console.log("Looks like you will be watching TV");
} else if (userCash < 0) {
    console.log("Please put a positive numerical value!");
} 
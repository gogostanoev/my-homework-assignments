let trainerJavaScript = "George";
let assistantJavaScript = "Aneta";

let uniquePeople = `Hello again ${trainerJavaScript} and ${assistantJavaScript} :)
I am submitting my homework with the chinese zodiac calendar`

console.log(uniquePeople);

// 1. Declare a variable and initialize the prompt method so the user can input his information
// 2. Declare a second variable and use the parseFloat() method on the first variable if necessary
// 3. Declare a third variable and initialize it by calculating the arithmetical operation (user input substracted by 4 and then modulus with 12)
// 4. Set up a structure with if statements (conditions) and if the condition is fulfilled, display the correct responses




/* The "%" which is called a modulus (division remainder)
   is an arithmetic operator in JavaScript. It needs a
   an explanation on how it works.

   For example let's say we have a given value of 2015
   and a given modulus of 12. We type 2015 % 12
   The way this is calculated is 2015 / 12 = 167.916666667
   Now we take the result but without the decimal value and
   multiply it by 12 and it will be 167 * 12 = 2004
   
   2015 - 2004 = 11 or 2015 % 12 = 11

   NOTE. If you have a calculation with the different 
   arithmetical operators like "+" "-" you MUST put
   them first parentheses "()" and after closing them
   use the modulus. If it is without brackets then the
   modulus will have the higher priority and will go first
*/


// We use "if" to specify a block of code to be executed, if a specified condition is true
// We use "else if" to specify a new condition to test, if the first condition is false


let birthYear = prompt("Please type your birth year");
console.log(birthYear);

let chineseZodiac = parseFloat(birthYear);
let chineseZodiacValue = (birthYear - 4) % 12;

if(chineseZodiac >= 2023){
    console.log("Invalid year, please type a valid year");
} else if(chineseZodiacValue === 0) {
    console.log("Your zodiac sign is a Rat!");
} else if(chineseZodiacValue === 1) {
    console.log("Your zodiac sign is an Ox!");
} else if(chineseZodiacValue === 2) {
    console.log("Your zodiac sign is a Tiger!");
} else if(chineseZodiacValue === 3) {
    console.log("Your zodiac sign is a Rabbit!");
} else if(chineseZodiacValue === 4) {
    console.log("Your zodiac sign is a Dragon!");
} else if(chineseZodiacValue === 5) {
    console.log("Your zodiac sign is a Snake!");
} else if(chineseZodiacValue === 6) {
    console.log("Your zodiac sign is a Horse!");
} else if(chineseZodiacValue === 7) {
    console.log("Your zodiac sign is a Goat!");
} else if(chineseZodiacValue === 8) {
    console.log("Your zodiac sign is a Monkey!");
} else if(chineseZodiacValue === 9) {
    console.log("Your zodiac sign is a Rooster!");
} else if(chineseZodiacValue === 10) {
    console.log("Your zodiac sign is a Dog!");
} else if(chineseZodiacValue === 11) {
    console.log("Your zodiac sign is a Pig!");
} 
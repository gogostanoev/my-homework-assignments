// The "let" keyword is used to declare a variable
// After we've declared a variable we use can initialize a value to the very same variable
/* Example:
   let glassOfWater (it is a variable);
   glassOfWater = "coldwater" (the inside of the quotation marks is what is the value) 
*/
// You can also declare a variable and initialize it's value in the very same line like below

// The console.log() method writes (logs) a message to the console

let greetingMessage = "Hello \n George and Aneta :)";
console.log(greetingMessage);
console.log(" --- First Calculation --- ");

// Calculating an area of a circle
/* 
 1. I should declare the variable for pi and initialize it's value
 2. I should declare the variable for r and initialize it's value
 3. The value of r should power with 2
 4. I should multiply the value of pi with the final value of r2
*/

// Variabless must begin with a letter or underscore and the camel case is considered a good practice like the line below

// NOTE. After every line you've typed in JavaScript, always use ";"

let piValue = 3.141592653589793;
let radiusValue = 10;
let powerValue = 2;

// The "**" is an arithmetical operator which raises the first operand to the power of the second operand

let exponentValue = radiusValue ** powerValue;

console.log(" The value is: ", exponentValue);

// The "*" is an arithmetical operator that multiplies numbers

let finalValue = piValue * exponentValue;

console.log(" Result of the caluclation is: ", finalValue);



console.log(" --- Second Calculation --- ")

// Calculating the price of phones
/* 
1. I should declare the variable for 1 phone and initialize it's value (the price of one phone)
2. I should declare the variable for the tax rate and initialize it's value (it is 5%)
3. I should declare the variable for the 100 and initialize it's value (it is needed to calculate percentage)
4. I should calculate the tax rate of one phone, divide it by 100 and initialize the value of the new price
5. I should input (print) the new price
6. I should declare the variable for all the phones and initialize it's value
7. I should multiply the value of all the phones with the value of the new price
8. I should input (print) the final price of phones
*/


// The "/" is an arithmetical operator that divides numbers

let onePhone = 119.95
let taxRate = 5
let hundredPercent = 100
let newPrice = (onePhone * taxRate) / hundredPercent

console.log(" The new price is: ", newPrice)

let allPhones = 30
let finalPrice = newPrice * allPhones

console.log(" The final price for the phones is: ", finalPrice)

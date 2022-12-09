console.log("--- HOMEWORK PART ONE ---");




// 1. I will use the "function" keyword and give it a name.
// 2. I will input a parameter inside the function.
// 3. I will put a code inside the function.
// 4. I will print the code in the console.
// 5. I will return it's value.
// 6. I will call out the function 5 times and each time with a different value type.



function fiveValues(dataType){

    if(dataType){
        return typeof dataType;
    }
}

console.log(fiveValues([]));
console.log(fiveValues(true));
console.log(fiveValues(225));
console.log(fiveValues("225"));
console.log(fiveValues());



    
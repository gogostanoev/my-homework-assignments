console.log("--- HOMEWORK PART TWO ---");






// 1. I will use the "function" keyword and set up a parameter
// 2. I will make a formula that calculates the dog years multiplied by 7
// 3. I will print the result
// 4. I will call out the function several times
// 5. I will repeat the same steps as above to convert the dog years in human years
// 6. But I have to keep in mind, to do that I need to divide the years with 7







function dogAge(puppyAge){

    let dogYears = parseFloat(puppyAge) * 7;

    console.log(`Your dog is ${dogYears} years in dog years :D`);

}

dogAge(5);
dogAge(6.5);
dogAge(12);




function dogAgeInHumanAge(puppyYears){

    let dogSum = parseFloat(puppyYears) / 7;

    console.log(`Your puppy is ${dogSum} years in humans years :)`);

}

dogAgeInHumanAge(14);
dogAgeInHumanAge(56);
dogAgeInHumanAge(84.7);
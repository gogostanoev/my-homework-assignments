console.log("--- STUDENT EXERCISE - #3");

console.log("--- AGE CALCULATOR ---");







function calculateAge(currentYear, birthYear){
    
    let ageResult = currentYear - birthYear;

    console.log(`You are ${ageResult} years old.`);

    return ageResult
}

calculateAge(2022, 1998);
calculateAge(2015, 1974);
calculateAge(1986, 1953);



console.log("--- BONUS EXAMPLE ---");



let exactCurrentDate = new Date();

console.log(exactCurrentDate);







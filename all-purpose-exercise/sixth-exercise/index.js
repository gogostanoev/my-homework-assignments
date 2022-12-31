console.log("Exercise #6");


// One student has 5 exams in the first semester. His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively. 
// The professor told the students that for passing the first semester they must have average of 8. The student needs to
// know whether they have passed the semester or not. Alert on screen if the student pass or not!



let allStudentGrades = [10, 6, 8, 9, 6];

function oneStudent(passingGrade){

    let averageScore = "";
    helperVariable = 0;

    for(let i = 0; i < passingGrade.length; i++){

        helperVariable += passingGrade[i];

    }

    averageScore = helperVariable / passingGrade.length;

    if(averageScore >= 8){

        alert("You've passed! Great job.")
    }
    else{

        alert("You didn't pass. Study more next time!")
    }

    return averageScore;
}


let finalResult = oneStudent(allStudentGrades);

console.log(`Your result is ${finalResult}`);
console.log("--- Student Exercise #5 ---");



// Create a student registry form. The form should have:

// First Name
// Last Name
// Age

// The form should have a save button which will create a student object and add it to an array (students). 
// Log the array after every save to see the results in the console.
// Bonus: Make the students appear in an unordered list in the page.







let inputOne = document.getElementById("inputOne");

let inputTwo = document.getElementById("inputTwo");

let inputThree = document.getElementById("inputThree");

let clickButton = document.getElementById("clickButton");

let collectionOfStudents = document.getElementById("collectionOfStudents");




let collectionStudents = [];



function Students(firstName, lastName, age){

    this.firstNameStudent = firstName;
    this.lastNameStudent = lastName;
    this.ageStudent = age;

}


clickButton.addEventListener("click", function(event){

    event.preventDefault();

    let studentInformation = new Students(inputOne.value, inputTwo.value, inputThree.value);

    collectionStudents.push(studentInformation);

    printStudentsInfo(collectionOfStudents, collectionStudents);

    inputOne.value = "";
    inputTwo.value = "";
    inputThree.value = "";
})


function printStudentsInfo(elementsToPrint, studentList){

    elementsToPrint.innerHTML = "";

    let unorderedList = document.createElement("ul");

    elementsToPrint.appendChild(unorderedList);

    for(let i = 0; i < studentList.length; i++){
        console.log(studentList[i]);

        unorderedList.innerHTML +=
        `
        <hr />
        <li> Name of student: ${studentList[i].firstNameStudent} ${studentList[i].lastNameStudent}  </li>
        <li> Student's current age is: ${studentList[i].ageStudent} </li>
        `
    }
}
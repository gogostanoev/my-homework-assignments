console.log("--- Student Exercise #3 ---");


let fName = document.getElementById("Fname");
console.log("Fname");

let lName = document.getElementById("Lname");
console.log("Lname");

let eadress = document.getElementById("Eadress");
console.log("Eadress");

let pass = document.getElementById("pass");
console.log(pass);

let submitButton = document.getElementById("submitButton");
console.log(submitButton);

let result = document.getElementById("result");
console.log(result);




function fourInputs(firstName, lastName, eMail, passWord){

    result.innerHTML = `Firstname: ${firstName} \nLastname: ${lastName}\nEmail: ${eMail}\nPassword: ${passWord}`;
}


submitButton.addEventListener("click", function(){

    fourInputs(fName.value, lName.value, eadress.value, pass.value);
})

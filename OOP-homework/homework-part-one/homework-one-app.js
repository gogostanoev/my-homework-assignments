console.log("--- Homework Part #1 ---");


// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs




let animal = {

   name: "Lala",
   kind: "cat",
   
   
   speak: function(messageFromTheKitty){

    return `The ${this.kind} named ${this.name} says: ${messageFromTheKitty}`
    
   }
}


console.log(animal.speak("I will always protect you!!"))
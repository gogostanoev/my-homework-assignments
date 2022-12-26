console.log("--- Student Exercise #4 ---");


// Create a car object with some properties
// model, color, year, fuel, fuelConsumption and a method that calculate how much fuel you will need to pass some distance.






let car = {
    model: "Ford",
    color: "Silver Pearl",
    yearOfProduction: 2018,
    fuel: 80,

    fuelConsumption: function(someDistance){

        return `${someDistance * (this.fuel / 100)}`
    }
}

console.log(car);
console.log(`Given the car's fuel, the car can travel for ${car.fuelConsumption(13.5)} kilometers`);
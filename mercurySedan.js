//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.passenger = 0;
        this.maxPassengers = 5;
        this.speed = 0;
        this.maxSpeed = 160;
        this.started = false;
        this.numberOfWheels = 4;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger += num;
                console.log(`Passenger has loaded, there are ${this.passenger} passengers in the vehicle`)
                return this.passenger;
            }
            else {
                console.log(`There isn't enough room for everyone`)
            }
        }
        else {
            console.log("No more passenger can be loaded");
        }
    }
    checkScheduleService(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true
            console.log(`Your mileage is ${mileage}, it's time for maintenance`)
            return this.scheduleService;
        }
    }

}

//bonus code///////////////////////////////////////
class Truck extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.passenger = 0;
        this.maxPassengers = 9;
        this.speed = 0;
        this.maxSpeed = 100;
        this.started = false;
        this.numberOfWheels = 8;
        this.fuel = 30;
        this.scheduleService = false;
    }
    loadPassenger(num) {

        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger += num;
                console.log(`Passenger has loaded, there are ${this.passenger} passengers in the vehicle`)
                return this.passenger;
            }
            else {
                console.log(`There isn't enough room for everyone`)
            }
        }
        else {
            console.log("No more passenger can be loaded");
        }
    }
    checkScheduleService(mileage) {

        if (mileage > 30000) {
            this.scheduleService = true
            console.log(`Your mileage is ${mileage}, it's time for maintenance`)
            return this.scheduleService;
        }
    }

}
/////////////////////////////////////////////////////////////
//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.
let v1 = new Car('Ford', 'Tempo', 1990, 'Brown', 130000)
console.log(`\n\n${v1.make}  ${v1.model}\n`)
v1.fuel = 10
v1.start();
v1.loadPassenger(6)
v1.typeOfVehicle(v1.numberOfWheels)


//Create at least two new instances of the Car class and test them here:
let testorolla = new Car('Mercury', 'A28', 2023, 'Midnight Blue', 0);
console.log(`\n\n${testorolla.make}  ${testorolla.model}\n`)
testorolla.start();
testorolla.loadPassenger(4);
testorolla.drive();
testorolla.typeOfVehicle(testorolla.numberOfWheels)

let secondCar = new Car("Chevrolet", "Camaro", 1969, "Black", 100000);
console.log(`\n\n${secondCar.make}  ${secondCar.model}\n`)
secondCar.loadPassenger(2);
secondCar.drive();
secondCar.typeOfVehicle(secondCar.numberOfWheels)



//Creating bonus test vehicles
let firstTruck = new Truck('Chevy', 'Silverado', 2003, 'Silver', 300000);
console.log(`\n\n${firstTruck.make}  ${firstTruck.model}\n`)
firstTruck.start();
firstTruck.loadPassenger(8);
while (firstTruck.fuel > 0) { //this one accelerates until it runs out of fuel
    firstTruck.drive();
}
firstTruck.typeOfVehicle(firstTruck.numberOfWheels)


let secondTruck = new Truck('Ford', 'F-150', 2010, 'Silver', 300000);
console.log(`\n\n${secondTruck.make}  ${secondTruck.model}\n`)
secondTruck.start();
secondTruck.loadPassenger(10);
while (secondTruck.fuel > 0) { //this one accelerates and brakes until it runs out of fuel
    if (Math.random() <= 0.5) {
        secondTruck.drive();
    }
    else {
        secondTruck.brake();
    }
}
let thirdTruck = new Truck('Dodge', 'Ram 1500', 2005, 'Silver', 100000);
console.log(`\n\n${thirdTruck.make}  ${thirdTruck.model}\n`)
thirdTruck.start();
thirdTruck.loadPassenger(2);
while (thirdTruck.fuel > 0) { //this one also accelerates and brakes until it runs out of fuel
    if (Math.random() <= 0.5) {
        thirdTruck.drive();
    }
    else {
        thirdTruck.brake();
    }
}
thirdTruck.checkScheduleService(thirdTruck.mileage)
//end bonus vehicles
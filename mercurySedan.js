//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


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

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.


let testorolla = new Car('Mercury', 'A28', 2023, 'Midnight Blue', 0);

testorolla.start();
testorolla.loadPassenger(3);
testorolla.autoDrive();


//Create at least two new instances of the Car class and test them here:

class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk () {
        return "Beep";
    }

    toString () {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 4;
    }

    revEngine () {
        return "VROOM!"
    }
}

class Motorcycle extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year)
        this.numWheels = 2;
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add (newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, garage is full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle stored";
    }
}
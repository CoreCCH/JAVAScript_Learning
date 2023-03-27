// array of object

class Car {
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Benz", 2022, "black");
const car3 = new Car("BMW", 2020, "white");

const cars = [car1, car2, car3];

// console.log(cars[0].model);
// console.log(cars[1].year);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}
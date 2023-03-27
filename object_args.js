// object as arguments

class Car {
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Benz", 2022, "black");
const car3 = new Car("BMW", 2020, "white");

changeColor(car2, "pink")
displayInfo(car2);

function displayInfo(car) {
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color;
}
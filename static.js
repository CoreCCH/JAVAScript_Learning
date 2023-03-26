// static = 屬於class 不屬於創造出的object
//          properties: useful for caches, fixed-configurations
//          methods:    useful for utility functions

class Car {
    // 靜態屬性
    static numberOfCars = 0;
    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }

    // 靜態方法
    static startRace(){
        console.log("3...2..1..Go!")
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Benz");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);

Car.startRace(); // car1 不能呼叫

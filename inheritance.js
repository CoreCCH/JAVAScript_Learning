// inheritance 繼承

class Animals{
    alive = true;
    
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}


class Rabbit extends Animals{
    name = "rabbit";
    run() {
        console.log(`${this.name} is runing`);
    }
}


class Fish extends Animals{
    name = "fish";
    swim() {
        console.log(`${this.name} is swimming`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.run();
fish.swim();
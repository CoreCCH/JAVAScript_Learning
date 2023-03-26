// super = 用於調用父類別的constructor

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

class Rabbit extends Animal{
    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed = runspeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flyspeed){
        super(name, age);
        this.flyspeed = flyspeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 30);
const hawk = new Hawk("hawk", 4, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
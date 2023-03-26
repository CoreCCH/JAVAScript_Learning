// getter 方法允許我們獲取類別的私有成員變數或計算後的屬性值，setter 方法允許我們設置類別的私有成員變數。

class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    // 不希望馬力被修改
    get power(){
        return `${this._power}hp`;
    }
    // 不希望計算剩餘油量的公式被修改
    get gas(){
        return `${this._gas}(${this._gas / 50 * 100}%)`
    }

    // 設定油量值是可以被修改的
    set gas(value){
        if (value >= 50){
            value = 50;
        }
        if (value < 0){
            value = 0;
        }
        this._gas = value;
    }   
}

let car = new Car(400);
console.log(car.power);
car.gas = -50;

console.log(car.gas);

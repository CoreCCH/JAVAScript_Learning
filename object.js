// object = 複合資料型別，可以存儲多個屬性（properties）和方法（methods）

const car = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log("You drive the car.");
    },

    brake : function(){
        console.log("You stop on the brakes.");
    }
}

console.log(car.model);
console.log(car.brake());
// this = 在函式中this只想調用該函式的對象
//        在事件處理程式中, this指向處發事件的元素

const car = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You drive the ${this.model}`); // 也可以是car.model
    },

    brake : function(){
        console.log("You stop on the brakes.");
    }
}

const car2 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You drive the ${this.model}`); // 也可以是car2.model
    },

    brake : function(){
        console.log("You stop on the brakes.");
    }
}

document.getElementById("submitButton").onclick= function() {
    let temp;
    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        document.getElementById("tempLabel").innerText = toCelsius(temp);
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        document.getElementById("tempLabel").innerText = toFahrenheit(temp);
    }
    else {
        document.getElementById("tempLabel").innerText = "Select a unit";
    }
}

let temp = 32;
temp = toFahrenheit(temp);
console.log(temp);

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}
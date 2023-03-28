// .addEventListener(event, function, useCapture)

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changedBlue);

// useCapture = true 當兩個事件同事觸發時，決定先觸發哪個
outerDiv.addEventListener("click", changedBlue, true);

function changedRed(){
    innerDiv.style.backgroundColor = "red";
}

function changedAquamarine(){
    innerDiv.style.backgroundColor = "aquamarine";
}

function changedBlue() {
    alert(`You select ${this.id}`);
    this.style.backgroundColor = "lightBlue";
}
// setInterval() = 定時器，每一段時間就執行一次

let count = 0;
let max = window.prompt("Count up to What #?");
max = Number(max);

const myTimer = setInterval(countUp, 1000); // 每秒執行一次countUp

function countUp() {
    count = count + 1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}
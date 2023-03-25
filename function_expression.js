// function expression = 可以將一個匿名函式（即沒有名稱的函式）作為值賦予給變數或其它表達式。
// 匿名函式               與函式聲明（Function Declaration）不同，
//                       函式表達式是在運行時創建的，而不是在解析時。


// const greeting = function() {
//     console.log("Hello!");
// }

// greeting();

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello "+username;
}


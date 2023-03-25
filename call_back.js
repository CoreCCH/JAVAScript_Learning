// callback = a function passed as an argument to another function.

sum(2, 3, displayConsole)

function sum(x, y, callBack) {
    result = x + y;
    callBack(result);
}

function displayConsole(output) {
    console.log(output);
}
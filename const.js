// const = a variable that can not changed

const pi = 3.14;
let radius;
let circumference;

radius = window.prompt("輸入圓半徑");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log(circumference);
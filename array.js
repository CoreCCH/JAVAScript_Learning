// array

let fruits = ["apple", "orange", "banana"];

// console.log(fruits[0]);

fruits.push("lemon"); // element加在array的最後面
fruits.pop(); // 移除array的最後面element
fruits.unshift("mango"); // element加在array的最前面
fruits.shift("mango"); // 移除array的最前面element

let length = fruits.length;
let index = fruits.indexOf("apple"); // 顯示element在哪個位置

console.log(index);
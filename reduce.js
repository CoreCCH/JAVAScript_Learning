// array.reduce()

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log('The total is: ', total);

function checkOut(total, element) { // total為一個蕾加值
    return total - element; // 如果沒有傳遞初始值，以陣列的第一個元素作為累加值
}
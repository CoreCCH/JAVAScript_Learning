let prices = [5,10,15,20];

// for(let i = 0; i < prices.length; i++){
//     console.log(prices[i]);
// }

// prices = prices.sort().reverse(); // sort會以ascii code排序
prices.sort(function(a,b){return a-b}); // 數字排序

for (let price of prices){
    console.log(price);
}




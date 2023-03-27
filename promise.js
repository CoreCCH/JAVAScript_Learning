// promise = 是一個表示異步操作的對象，它可以用來管理異步操作的狀態和結果


// 在使用 Promise 時，通常會傳入一個函數作為 Promise 的執行體。這個函數會接受兩個參
// 數：resolve 和 reject，這兩個參數都是函數型別。這個函數會在 Promise 執行的時候
// 被調用。傳入 resolve 和 reject 函數是 Promise 標準規範中所要求的。

// resolve 函數用於將 Promise 的狀態從「未完成」變為「已完成」，也就是將 Promise 
// 的結果返回。reject 函數用於將 Promise 的狀態從「未完成」變為「已失敗」，也就是將 
// Promise 的錯誤原因返回。

// producing code
// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;
//     if(fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("File not loaded");
//     }
// });

// // consuming code
// promise.then(value => console.log(value))
//        .catch(error => console.log(error));

// const promise = new Promise(resolve => {
//     setTimeout(resolve,10000);
// });

// promise.then(()=>console.log("thanks waiting."));

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(()=>console.log("thank waiting!"));

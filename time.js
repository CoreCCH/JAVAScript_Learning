// console.time() = 創建一個timer，記錄程式執行時間

// start
console.time("Response Time");

// alert("click the ok button!");
setTimeout(() => {
    console.log("Hello!!");
}, 3000);

//end
console.timeEnd("Response Time");
// synchronous(同步) = 在進行同步操作時，必須等待當前操作完成後才能進行下一個操作

// asynchronous(異步) = 不需要等待該操作完成，就可以繼續進行其他操作。
//                     異步操作的好處是不會阻塞JavaScript的執行緒，可以提高程序的性能，
//                     但同時也會增加代碼的複雜性，需要注意異步操作可能產生的問題。

console.log("START");
setTimeout(() => {
    console.log("This is asynchronous.");
}, 5000);
console.log("Stop");


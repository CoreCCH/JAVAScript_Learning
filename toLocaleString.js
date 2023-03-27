// toLocaleString() = 是一個日期、數字、貨幣等基本數據類型的方法，
//                    用於將這些基本數據類型轉換為特定語言和地區的字符串表示形式。


let myNum = 100;
// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // standard German

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // US dollar
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // Rubi

// myNum = myNum.toLocaleString(undefined, {style: "percent"});

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);
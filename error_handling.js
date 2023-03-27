// error handling
// 跟python中的try..expect..finally類似

try {
    let x = window.prompt("Enter a number.");
    x = Number(x);

    if(isNaN(x)) throw "That's not a number."; // 用throw的方式觸發catch
    if(x=="") throw "That's empty.";
    console.log(`${x} is a number.`)
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes.");
}
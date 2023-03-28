const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", () => {
    console.log(myImg.style.display);
    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
    }
    else{
        myImg.style.visibility = "hidden";
    }
}) 
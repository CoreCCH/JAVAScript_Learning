const myButton = document.getElementById("myButton");
const myAnimations = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
    let timer = null;
    let degree = 0;
    let scaleX = 1;
    let scaleY = 1;
    timer = setInterval(frame, 5);

    function frame(){
        if(scaleX >= 2 || scaleY >= 2){
            clearInterval(timer);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            myAnimations.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}
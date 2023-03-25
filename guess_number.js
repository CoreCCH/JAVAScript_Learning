const answer = Math.floor(Math.random() * 10 + 1)
let gusses = 0;

document.getElementById("submitButton").onclick = function(){
    let gusse = document.getElementById("guessField").value;
    gusses += 1;

    if(gusse == answer) {
        alert(`${answer} is the #. Tt took you ${gusses} gusses`);
    }
    else if(gusse < answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }
}
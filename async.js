// async = make a function return a Promise

async function loadFile() {
    let fileLoaded = false;
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File not loaded";
    }
}


// consuming code
loadFile().then(value => console.log(value))
       .catch(error => console.log(error));
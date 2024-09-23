
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function  randomizeCell(){
    console.log("test")
    
    let randomNumber = getRandomInt(1, 16);
    console.log(document.querySelector("#id"+randomNumber))
    
    }


    
    
    
    
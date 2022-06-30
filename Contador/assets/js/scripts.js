var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


var currentNumberWrapper2 = document.getElementById('currentNumber2');
var currentNumber2 = 0;

//
function increment() {
    currentNumber  = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 0){
        document.getElementById('currentNumber').style.color = "black"
    }
}


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;


    if(currentNumber < 0){
        document.getElementById('currentNumber').style.color = "red"
    }
}

function increment2(){
    if(currentNumber2 >= 0 && currentNumber2 <= 19){
        currentNumber2 = currentNumber2 + 1;
        currentNumberWrapper2.innerHTML = currentNumber2;
    }
}

function decrement2(){
    if(currentNumber2 >= 1){
        currentNumber2 = currentNumber2 - 1;
        currentNumberWrapper2.innerHTML = currentNumber2;
    }
}
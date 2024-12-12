let display = document.getElementById('display');
let count = 0 ;

function increment(){
    count++;
    display.textContent = count;
}

function decrement(){
    count--;
    display.textContent = count;
}

function reset(){
    count = 0;
    display.textContent = count;
}
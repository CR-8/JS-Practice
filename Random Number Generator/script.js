// RANDOM NUMBER GENERATOR

const button = document.getElementById('random_button');
const min = 1 ;
const max = 9 ;

// Add sound function
function playSound(elementId) {
    const sound = document.getElementById(elementId);
    sound.currentTime = 0;
    sound.play();
}

button.onclick = function(){
    playSound('clickSound');
    const rand1 = Math.floor(Math.random() * ( max - min + 1)) + min;
    const rand2 = Math.floor(Math.random() * ( max - min + 1)) + min;
    const rand3 = Math.floor(Math.random() * ( max - min + 1)) + min;

    document.getElementById('char1').textContent = rand1 ; 
    document.getElementById('char2').textContent = rand2 ; 
    document.getElementById('char3').textContent = rand3 ; 
    playSound('successSound');
}

// CLOCK 

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours <= 12 ? "AM" : "PM" ;
    hours = hours % 12 || 12 ;
    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}:${meridian}` ;
    document.getElementById("time").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

// STOPWATCH

const display = document.getElementById('display');
let timer = 0 ;
let startTime = 0 ;
let ElapsedTime = 0 ;
let isRunning = false ;

function start(){
    if(!isRunning){
        startTime = Date.now() - ElapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        ElapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0 ;
    ElapsedTime = 0 ;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    ElapsedTime = currentTime - startTime;

    let hours = Math.floor(ElapsedTime /(1000 * 60 * 60));
    let minutes = Math.floor(ElapsedTime /(1000 * 60 ) % 60);
    let seconds = Math.floor(ElapsedTime /1000 % 60);
    let milliseconds = Math.floor(ElapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

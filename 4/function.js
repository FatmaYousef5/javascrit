let counter = 1, timer;
let imageObject = document.querySelector("#image");
imageObject.onclick = function () {
    counter++;
    if (counter > 4) counter = 1;
    imageObject.src = `images/${counter}.jpeg`
}


let nextBtn = document.querySelector("#next");
nextBtn.onclick = function () {
    counter++;
    if (counter > 4) counter = 1;
    imageObject.src = `images/${counter}.jpeg`
}
let previousBtn = document.querySelector("#pre");
previousBtn.onclick = function () {
    counter--;
    if (counter < 4) counter = 1;
    imageObject.src = `images/${counter}.jpeg`
}
let slideBtn = document.querySelector("#slide");
slideBtn.onclick = function () {
    timer = setInterval(() => {
        counter++;
        if (counter > 4) counter = 1;
        imageObject.src = `images/${counter}.jpeg`
    }, 2500)
}
let stopBtn = document.querySelector("#stop");
stopBtn.onclick = function () {
    clearInterval(timer);
}

let startButton = document.querySelector("#start-button");
let stopButton = document.querySelector("#stop-button");

let seconds = 00;
let minutes = 00;
let hours = 00;

startButton.onclick = function () {
    timer = setInterval(() => {
        seconds++;
        if (seconds <= 9) {
            document.getElementById("second").innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            document.getElementById("second").innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++;
            document.getElementById("minute").innerHTML = "0" + minutes;
            seconds = 0;
            document.getElementById("second").innerHTML = "0" + seconds;
        }
        if(minutes <= 9){
        document.getElementById("minute").innerHTML = "0" + minutes;
        }
        if(minutes > 9){
            document.getElementById("minute").innerHTML = minutes;
            }
            if(minutes > 59){
                hours++
                document.getElementById("hour").innerHTML = "0"+ hours;
                minutes = 0;
            document.getElementById("minute").innerHTML = "0" + 0;
                }
    }, 1000);
}
stopButton.onclick = function () {
    clearInterval(timer);
}


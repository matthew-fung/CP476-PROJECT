/**
 * play2.js - Handles gameplay for play2.html
 */

//TODO: Set this to false before production - this outputs each step to console
let debug = true;


/**
 * Returns a number between 0 and maxValue
 * @param: N/A
 * @return: randomValue - Random number between 0 and maxValue (int)
 */
function getRandomValue() {
    let maxValue = 7;
    let randomValue = Math.floor(Math.random() * Math.floor(maxValue));
    return randomValue;
};


/**
 * Starts the game time countdown + changes circle color
 * @param: duration - game time (int)
 * @param: display - 
 */
function startCountdown(duration, circleTime) {
    var timer = duration,
        seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        document.querySelector('#questionTime').textContent = seconds;
        if (timer == circleTime) {
            console.log('timer = circletime')
            document.querySelector('#circle').src = "assets/circles/green-circle.png";
        }
        if (timer > 0) {
            timer--;
        }
    }, 1000);
};



function circleClickHandler() {
    console.log('circle clicked');
}



var circle = document.querySelector('circle');

window.onload = function () {
    var greenCircleTime = getRandomValue();
    console.log('green circle time: '+ greenCircleTime);
    startCountdown(7, greenCircleTime);

    


};

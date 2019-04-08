/**
 * play2.js - Handles gameplay for play2.html
 */

//TODO: Set this to false before production - this outputs each step to console
let debug = true;
var puppiesClicked = 0;
var bagelsClicked = 0;

/**
 * Starts the game time countdown
 * @param: duration - game time (int)
 * @param: display -
 */
function startCountdown(duration) {
    var timer = duration,
        seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        document.querySelector('#questionTime').textContent = seconds;

        if (timer > 0) {
            timer--;
        }
        if (timer == 0 && (!isCorrect || bagelsClicked != 3) ) {
          isCorrect = false;
        }

        if(debug && timer == 0) {
          console.log("Does user receive points? " + isCorrect);
        }
    }, 1000);
};


function puppyClickHandler() {
    // console.log('puppy clicked');
    puppiesClicked++;
}

function bagelClickHandler() {
    // alert('bagel clicked');
    bagelsClicked++;
    document.getElementById('qButton').value = bagelsClicked;
}


var puppy1 = document.getElementById('puppy1');
var puppy2 = document.getElementById('puppy2');
var puppy3 = document.getElementById('puppy3');

var bagel1 = document.getElementById('bagel1');
var bagel2 = document.getElementById('bagel2');
var bagel3 = document.getElementById('bagel3');

window.onload = function () {

    startCountdown(7);
    
    puppy1.addEventListener('click', puppyClickHandler);
    puppy2.addEventListener('click', puppyClickHandler);
    puppy3.addEventListener('click', puppyClickHandler);

    bagel1.addEventListener('click', bagelClickHandler);
    bagel2.addEventListener('click', bagelClickHandler);
    bagel3.addEventListener('click', bagelClickHandler);

    


};

/**
 * play1.js - Handles gameplay for play1.html
 */

//TODO: Set this to false before production - this outputs each step to console
let debug = true;
var userAnswer = null;
var timeout = false;

 /**
  * Returns a number between 0 and maxValue
  * @param: N/A
  * @return: randomValue - Random number between 0 and maxValue (int)
  */
function getRandomValue() {
    let maxValue = 12;
    let randomValue = Math.floor(Math.random() * Math.floor(maxValue));
    return randomValue;
};


/**
 * Checks if user's answer is correct
 * @param: value1 (int)
 * @param: value2 (int)
 * @param: userAnswer (int)
 * @return: true if correct, false if incorrect (Boolean)
 */
function validateAnswer(value1, value2, userAnswer) {
    let isCorrect = false;
    let correctAnswer = value1*value2;
    if(userAnswer == correctAnswer) {
        isCorrect = true;
    }
    return isCorrect;
};

/**
 * Starts the game time countdown
 * @param: duration - game time (int)
 * @param: display -
 */
function startCountdown(duration) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        document.querySelector('#questionTime').textContent = seconds;

        if(timer > 0 ) {
            timer--;
        }
        // if timer times out and the answer is incorrect, user does not get the point
        if(timer == 0) {
          timeout = true;
        }
    }, 1000);
};


window.onload = function () {

    //start game timer countdown
    var duration = 7;
    startCountdown(duration);

    // generate question values
    var value1 = getRandomValue();
    var value2 = getRandomValue();

    // change html to display value1 and value 2 in the question
    document.getElementById('value1').innerHTML = value1;
    document.getElementById('value2').innerHTML = value2;
    if (debug == true) {
        console.log('value 1:' + value1);
        console.log('value 2:' + value2);;
    };

    // check if submit button is clicked
    document.getElementById('qButton').onclick = function () {
        userAnswer = document.getElementById('qInput').value;
        if (userAnswer == '') {
            if (debug == true) {
                console.log('empty answer');
            };
        } else {
            var isCorrect = validateAnswer(value1, value2, userAnswer);
            console.log('is the users answer correct? ' + isCorrect);
            if(timeout) {
              isCorrect = false;
              console.log("but there is timeout");
            }
            if (debug == true) {
                console.log('is the users answer correct? ' + isCorrect);
            };

        };
    };
};

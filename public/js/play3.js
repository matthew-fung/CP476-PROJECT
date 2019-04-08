/**
 * play2.js - Handles gameplay for play2.html
 */

//TODO: Set this to false before production - this outputs each step to console
let debug = true;
var isClicked = false;
var isCorrect = false;
var circle = document.querySelector('#circle');


/**
 * Returns a number between 0 and maxValue
 * @param: N/A
 * @return: randomValue - Random number between 0 and maxValue (int)
 */
function getRandomValue() {
    let maxValue = 7;
    let randomValue = Math.floor(Math.random() * Math.floor(maxValue));
    return randomValue + 1;
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
            console.log('timer = circletime');
            document.querySelector('#circle').src = "/assets/circles/green-circle.png";
        } else {
          document.querySelector('#circle').src = "/assets/circles/red-circle.png";
        }
        // user must click green circle within 2 seconds
        if(timer <= circleTime && timer >= circleTime - 1 && isClicked) {
          console.log("time: " + timer);
          isCorrect = true;
        }

        if (timer > 0) {
            timer--;
        }

        if(timer == 0 && debug) {
          console.log("User passed this round: " + isCorrect);
        }
    }, 1000);
};



function circleClickHandler() {
    // only records clicks if they are within the timeframe of circle being green
    //console.log('circle clicked');
    circleImgStr = document.querySelector('#circle').src;
    if(circleImgStr.includes("green")) {
      isClicked = true;
    } else {
      // if they click while it is red, they will be wrong
      isClicked = false;
      circle.removeEventListener('click', circleClickHandler);
    }

    if(isClicked) {
        console.log('clicked, now sending post request');
        var xhttp = new XMLHttpRequest();
        var params = "userGame3Answer=pass"
        xhttp.open("POST", "http://localhost:5000/play/game3", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(params);
        console.log('sent!');
    } else {
        console.log('not clicked, now sending post request');
        var xhttp = new XMLHttpRequest();
        var params = "userGame3Answer=fail"
        xhttp.open("POST", "/play/game3", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(params);
        console.log('sent!');
    }

    window.location.replace("/results");


}



window.onload = function () {
    var greenCircleTime = getRandomValue();
    console.log('green circle time: '+ greenCircleTime);
    startCountdown(7, greenCircleTime);
    circle.addEventListener("click", circleClickHandler);
    //console.log("timer: " + timer + ". Isclicked: " + isClicked);




};

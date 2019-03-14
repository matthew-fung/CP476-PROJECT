
var button = document.getElementById("nextButton"),
  count = 1;
button.onclick = function() {
  count += 1;
  document.getElementById("questionNo").innerHTML = "Question " + count + ":";
  // document.getElementById("question").innerHTML = "";

  if(count == 10) {
    // go to results
  }
};

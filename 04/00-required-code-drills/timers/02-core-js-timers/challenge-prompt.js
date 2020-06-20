// Practice with timers
var playSound = function(soundObj) {
    var sound = document.getElementById(soundObj);
    sound.Play();
  }
var audio = new Audio('droplets.wav');

  

console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
var q1TimesUp = function() {
    alert("Question 1");
}

setTimeout(q1TimesUp, 5000);


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds

var q2TimesUp = function() {
    alert("Question 2");
}

var q2Timer = setTimeout(q2TimesUp, 15000);


// Remove the timer you just made for Question 2

clearTimeout(q2Timer);

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

var q3TimesUp = function() {
    alert("Question 3 part 1");
}

var q3Timer = setTimeout(q3TimesUp, 15000);


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
var q3_2TimesUp = function() {
    alert("Question 3 part 2");
}

var q3Timer = setTimeout(q3_2TimesUp, 16000);



console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(q3Timer);


console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"

var q3Timer = setTimeout(function() {
    audio.play();
    console.log("Question 5 Completed!");
}, 11000);





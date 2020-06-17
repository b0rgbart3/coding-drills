// define a function "fun" that console logs "Functions are FUN!"


var fun = function() {
    console.log("Functions are FUN!");
}

// before moving on, open index.html and see what console logs have been made.
// why doesn't "Functions are FUN! appear yet?"
/*
The string "Functions are FUN!" does not appear in the console yet because
the functions has been declared, but it has not yet been *called*.
*/


// define a function "thirtySeven" that console logs the sum of 18 and 19
var thirtySeven = function() {
    console.log(18+19);
}


// call two functions you've defined so far
fun();
thirtySeven();

// define a function "log" that takes in an argument and console logs that argument

var log = function(arg) {
    console.log(arg);
}


// define a function "hello" that calls on the "log" function to console log "Hello World"
var hello = function() {
    log("Hello Wold");
}


// call your "hello" function
hello();

// define a function "popUp" that creates an alert that says "This is an alert."
var popUp = function() {
    alert("This is an alert.");
}


// define a function "noPopUp" that creates an alert that says "Okay, you won't get a pop up."
var nonPopUp = function() {
    alert("Okay, you won't get a pop up.");
}


// define a function "goodDay" that creates a confirm dialogue asking the user if they are having a nice day
// and uses your "log" function to display the response

var goodDay=function() {
    var niceDay = confirm("Are you having a nice day?");
    if (niceDay) {
        log("Yes, the user is having a nice day.");
    } else {
        log("No, the user is NOT having a nice day.");
    }
}

// call your "goodDay" function
goodDay();

// define a function "userPopUp" that creates a confirm dialogue asking the user if they would like a popup
// if they answer yes, call upon your "popUp" function; otherwise, call upon your "noPopUp" function

var userPopUp = function() {
    var popPlease = confirm("Would you like a popup?");
    if (popPlease) {
        popUp();
    } else {
        nonPopUp();
    }
}

// call your "userPopUp" function
userPopUp();

// define a function "userName" that prompts the user for their name and then 
// uses your "log" function to display the response

var userName = function() {
    var userName = prompt("Please enter your name: ");
    log("User Name: " + userName);
}

// call your "userName" function
userName();

// define a function "favoriteFruit" that prompts the user for their favorite fruit
// and the creates an alert that displays the response

var favoriteFruit = function() {
    var fruit = prompt("What is your favorite fruit?");
    alert("You answered: " + fruit);
}

// call your "favoriteFruit" function



favoriteFruit();
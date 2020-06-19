// Event Listeners and `this`

// This function takes in a string and returns a jQuery element.
// The element should be a button that contains the argument string as both
// its text value and its data value. We will be using this button to
// display the string in the display-area when clicked later.
function createButton(str) {
  // ---------- Your Code Here ----------

        // create a new button div
        var newButton = document.createElement('button');

        // add a class to the button so we can refer to it with our click listener

        newButton.classList.add("content-button")
        // set the text and data of the button to be the argument given to this function
        newButton.textContent = str;
        newButton.dataset["content"] = str + " ";


        // add the button div we've been working on to the button area
        var buttonArea = document.getElementById("button-area");

        buttonArea.appendChild(newButton);



  // ---------- End of Code area ----------
}



// This function is executed when one of our generated buttons is clicked.
// We've been using anonymous functions up until now, but we can define this
// function before hand and pass in the pointer to this function in the
// click listener.
// This function should take the string stored in the data field of the button
// that was clicked on and append it to the display-area.
function displayContent(event) {
  // ---------- Your Code Here ----------

      var text = $(this).data("content");
      $("#display-area").append(text);




  // ---------- End of Code area ----------
}



// document.ready shorthand
// Put your click listeners here.
$(function () {
  // ---------- Your Code Here ----------

        //console.log('document')
        // create a click listener on the buttons that we generate
        // and have it call on the `displayContent` function

        $(document).on("click", ".content-button", displayContent);

        // create a click listener for the "Clear" button. It should
        // empty the display area


        $(document).on("click", "#clear-button", function(event) {
        // prevent the normal form submit action
        event.preventDefault();
        // clear out all the newly created button
        $("#display-area").empty();
        $("#button-area").empty();
        });



  // create a click listener for the "Submit" button. It should
  // save the string the user input into the form and call on the
  // createButton function with that string

        $(document).on("click", "#submit-button", function(event) {
          // prevent the normal form submit action
          event.preventDefault();

          // grab the text from the user input field
          var buttonText = $("#user-input").val();
          // clear the text from the input field
          $("#user-input").val("");
          // create a button with the text that user entetered.
          createButton(buttonText);
        });



  // ---------- End of Code area ----------
})
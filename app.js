// Create array of strings related to topic that interests you
// Your app should take the topics in this array and create buttons in your HTML.
    //Try using a loop that appends a button for each string in the array.
//When the user clicks on a button, the page should grab 10 static, non-animated gif images 
    // from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the 
    //user clicks the gif again, it should stop playing.
// Under every gif, display its rating (PG, G, so on).
// (Only once you get images displaying with button presses should you move on to the next step.)
// Add form to page that takes user input value and adds it to 'topics' array
    //make a function call that takes each topic in the array remakes the buttons on the page.


    // Array of buttons
var topics = ["Optimus Prime", "Megatron", "Transformers G1", "Beast Wars"]

// Function and Loop which will take each part of the array and appends to a button
function renderButtons() {
    $("#buttons").empty();

    for (i = 0; i < topics.length; i++) {
      var a=$("<button>");
      a.addClass("topic");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#buttons").append(a);
    }
}

// User click button event, page should grab 10 static gifs from API
// Create request for API

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

    // Array of topics to be made into buttons
var bugArray = ["Grasshopper", "Ant", "Wasp", "Honeybee", "Moth", "Butterfly"]

// Function and Loop which will take each part of the array and appends to a button
// appended string into button onclick function to search each part of array strings
$(document).ready(function() {
    for (var i = 0; i < bugArray.length; i++) {
        $("#bug-buttons").append("<button type='button' onclick='searchGif(\"" + bugArray[i] + "\")' class='btn btn-primary' value=' " + bugArray[i] + "'> " + bugArray[i] + " </button>");
    }
});

// User click button event, page should grab 10 static gifs from API

function buttonClicked() {
    var userInput = $('#bug-input').val();
    searchGif(userInput);
}

// 
function submitButtonClicked() {
    var userInput = $('#bug-input').val();

    if (userInput) {
        $('#bug-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

// Ajax will take 
function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=D8yCtMtas88S6OW60SRHwAih3BqYBUop',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}

// Gifs will be displayed as still images appended to unique div on html page
function displayGif(response) {
    $('#bugs').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "height:250px"><br>' + rating;

        image = '<div class="col-md-4">' + image + "</div>";
        $('#bugs').append(image);
    }


//Clicking on the gif will make it dynamic/animated
    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}

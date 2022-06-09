// update the time blocks with correct color and if there are saved text in local storage for that elements text
var updateTimeBlocks = function(){
    // gets current hour
    var currentHour = moment().hour();
    // loops through every class with description remembering the index
    $(".description").each(function(index){
        // starts at nine
        var blockTime = index + 9;
        // change to the correct color for the time of the day
        if(currentHour > blockTime){
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if(currentHour < blockTime){
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        // gets the value of the from storage using a key
        var savedText = localStorage.getItem("hour-" + index);
        // makes sure the val is not null
        if(savedText !== null){
            $(this).html(savedText);
        }

    });
}
// add click listeners that gets the correct key and text val then saves into storage
var setUpSaveButtons = function(){
    $(".saveBtn").on("click", function(){
        var hour = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        localStorage.setItem(hour, text);
    })
}
// main function that gets every element set up 
var updatePage = function(){
    var todayDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todayDate);
    updateTimeBlocks();
    setUpSaveButtons();
};
updatePage();


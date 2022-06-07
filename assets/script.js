var changeColor = function(){
    var currentHour = moment().hour();
    $(".description").each(function(index){
        // starts at nine
        var blockTime = index + 9;
        
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
    });
}
var updatePage = function(){
    var todayDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todayDate);
    changeColor();
};
updatePage();


var saveBtn = $("#saveBtn");
var textArea = $("#saveHere");



// sets time interval
var myInterval = setInterval(nowTime,100);
function nowTime (){
var now = moment().format("MMM Do, YYYY,  h:mm:ss a")
$("#currentDay").text(now);
}


// sets color to time
function timeColor() {
    var currentTime = moment().hours();
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split(" ")[0]);
        if (timeBlock < currentTime) {
            $(this).addClass("past");
        } else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        
    })
}





// saveBtn.addEventListener("click", function(){
    
//     textArea = localStorage.setItem("save", textArea);
//     console.log("save")

// })

$(document).ready(function(){
 $(".saveBtn").click(function(){
    var textInput = $(this).siblings(".description").val();
    var timeNum = $(this).prev().attr("id");
    localStorage.setItem(timeNum,textInput );
    console.log(this);
}); 
})
for (i = 9; i < 18; i++) {
    var timeNum = localStorage.getItem(i);
    var textInput = $("#" + i);
    textInput.val(timeNum);
    console.log(textInput)
}
  


timeColor();







// make an empty array for the text box
// make a for loop for the hours
// cycle hours and 

// so i need to utalize the moment function 
// need to make it responcive to the current time
// colors are changed based on current time, futur, past
// make a save button for the text 
// when the page refreshes the text stays
// a save button with pic
// Wrap all code that interacts with the DOM 
$(function () {
  // Save whats  added to page
  var saveBtn = document.querySelectorAll(".saveBtn");
  $(saveBtn).on("click", function(event){
    event.preventDefault();
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id").split("-")[1];

    localStorage.setItem(hour,text);
  });

  // Remove or adds past, present, and future 
  var hourSegments = document.querySelectorAll(".time-block");
  var checkTime = dayjs().format('HH');
  $(hourSegments).each(function() {
    var timeValue = $(this).attr("id").split("-")[1];

    if (checkTime == timeValue) {
      $(this).removeClass('past');
      $(this).removeClass('future');
    } else if (checkTime < timeValue) {
      $(this).removeClass('present');
      $(this).removeClass('past');
      $(this).addClass('future');
    } else if (checkTime > timeValue) {
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    };
  });
 
  // uses local storage for user input
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  
  // adds todays date
  var date = $("#currentDay");
  var today = dayjs();
  $(date).text(today.format('dddd, MMMM D, YYYY'));
});
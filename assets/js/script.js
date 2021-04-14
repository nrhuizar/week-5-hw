$(document).ready(function() {
    // Date in header
    var now = moment();
    var currentDay = document.getElementById('currentDay');
    currentDay.innerHTML = now.format('dddd, MMMM Do YYYY');

    // load tasks
    $("#8 .task").val(localStorage.getItem("8"));
    $("#9 .task").val(localStorage.getItem("9"));
    $("#10 .task").val(localStorage.getItem("10"));
    $("#11 .task").val(localStorage.getItem("11"));
    $("#12 .task").val(localStorage.getItem("12"));
    $("#13 .task").val(localStorage.getItem("13"));
    $("#14 .task").val(localStorage.getItem("14"));
    $("#15 .task").val(localStorage.getItem("15"));
    $("#16 .task").val(localStorage.getItem("16"));
    $("#17 .task").val(localStorage.getItem("17"));
    
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".task").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });

    var hour = moment().hours();

    function colorSchedule(){
        $(".row").each(function(){
            var rowHour = $(this).attr("id");
            var rowNumber = parseInt(rowHour);
            if (rowNumber === hour){
                $(this).addClass("present");
            } else if (rowNumber < hour){
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };

    colorSchedule();

});

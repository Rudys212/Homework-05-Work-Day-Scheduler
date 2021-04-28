$(document).ready(function () {
  //display current day and time
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  // listen to save button click
  $(".saveBtn").on("click", function () {
    // value for dates
    console.log(this);
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save to local storage
    localStorage.setItem(time, value);

    $("#8morn .description").val(localStorage.getItem("8morn"));
    $("#9morn .description").val(localStorage.getItem("9morn"));
    $("#10morn .description").val(localStorage.getItem("10morn"));
    $("#11morn .description").val(localStorage.getItem("11morn"));
    $("#12after .description").val(localStorage.getItem("12after"));
    $("#1after .description").val(localStorage.getItem("1after"));
    $("#2after .description").val(localStorage.getItem("2after"));
    $("#3after.description").val(localStorage.getItem("3after"));
    $("#4after .description").val(localStorage.getItem("4after"));
    $("#5after .description").val(localStorage.getItem("5after"));
  });
  function currentTime() {
    var currentHour = moment().hours();

    $(".timeblocks").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hr")[1]);

      if (blockTime < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockTime === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  currentTime();
});

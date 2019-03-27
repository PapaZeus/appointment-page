
$(document).ready(function() {
  $("form#submit_info").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
      var descriptionInput = $("input#description").val();
      var dateInput= $("input#date").val();
      var startInput = $("input#start").val();
      var endInput = $("input#end").val();

      $(".name").text(nameInput);
      $(".description").text(descriptionInput);
      $(".date").text(dateInput);
      $(".start").text(startInput);
      $(".end").text(endInput);

      $("#submission").show();
      alert('Booking Successful!');
  });
});

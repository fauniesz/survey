$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var streetInput= $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var beverageChoiceInput = $("#beverage").val();

    $(".beverage").text(beverageChoiceInput);
    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#receipt").show();

    event.preventDefault();
  });
});

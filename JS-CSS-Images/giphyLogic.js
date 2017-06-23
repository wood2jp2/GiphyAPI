$(document).ready(function(){


	var userInput = $("#userInput").val().trim();
    var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + userInput;
	$.ajax({
		url: queryURL,
		method: "GET",
	}).done(function(response) {

		var carImage = $("<img>");
		var carButton = $("<button>");

		console.log(response);
		console.log(response.data.url);
		$(carImage).attr("src", response.data.image_original_url);
		$('#gifResults').prepend(carImage);
		carButton.text(userInput);
		$('#gifButtons').prepend(carButton);


});
});
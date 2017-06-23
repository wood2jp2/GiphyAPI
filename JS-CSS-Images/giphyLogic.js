$(document).ready(function(){

		var userInput = $("#userInput").val().trim() + "dog";
    	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=f4f070759ff64c25affb59086f863cf6&limit=10";

    	// calling API...
		$.ajax({
			url: queryURL,
			method: "GET",
		}).done(function(response) {

		var results = response.data;
		var i = 0;
		var picture;

		for (i; i<results.length; i++) {

			var carDiv = $('<div>');
			var carImage = $("<img>");
			var carButton = $("<button>");
			picture = results[i].images.fixed_height_still.url;
			var ratingP = "Rating is: " + results[i].rating;

			console.log(response);
			// adding all attributes necessary to the image before appending to page
			carImage.attr("src", picture);
			carImage.attr("alt", "car-gif");
			carImage.attr("data-state", "still");
			carImage.attr("data-still", picture);
			carImage.attr("data-animate", results[i].images.fixed_height.url);
			carImage.addClass("gif");

			// appending the rating and the picture together before appending to page
			carDiv.prepend(carImage, ratingP);
			$('#gifResults').prepend(carDiv);	
		}

		carButton.text(userInput);

		$('#gifButtons').prepend(carButton);

		$(".gif").on("click", function() {

			var state = $(this).attr("data-state");

			if (state==='still') {
				$(this).attr("src", $(this).attr("data-animate"));
				$(this).attr("data-state", "animate");
			} else {
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still")
			}
		});

		});
	});
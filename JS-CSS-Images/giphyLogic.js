$(document).ready(function(){

	// geting my Object-Oriented Programming on
	var giphy = {

    	topics: ["cars", "dogs", "pizza", "seinfeld", "GoT", "baseball", "coding", "future", "robots"],
    	i: 0,

    	// populating buttons for pre-existing array topics
    	populateButtons: function() {
    		for (i=0; i<this.topics.length; i++) {
    			var populateButton = $('<button>');
    			populateButton.text(this.topics[i]);
    			populateButton.attr("id", this.topics[i]);
    			populateButton.addClass("button");
    			$('#gifButtons').append(populateButton);
    		}
    	},	

    	addButton: function() {
    		$('#addButton').on("click", function(event) {
    			event.preventDefault();
    			var userInput = $("#userInput").val().trim();
    			var addNewButton = $('<button>');
    			addNewButton.text(userInput);
    			addNewButton.attr("id", userInput);
    			addNewButton.addClass("button");
    			$('#gifButtons').append(addNewButton);
    			$('#userInput').text("");
    		});
    	},

    	displayGifs: function() {
    		$('.button').on('click', function() {
    			currentButtonId = $(this).attr("id");
    			callAPI();
    	
		    	function callAPI() {
		    		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + currentButtonId + "&api_key=f4f070759ff64c25affb59086f863cf6&limit=10";

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
						};
					});
				};
			});
		},

		// pauseGifs: function() {
		// 	console.log(this);
		// 	$(".gif").on("click", function() {
		// 		console.log("poop again");
		// 		var state = $(this).attr("data-state");

		// 		if (state==='still') {
		// 			$(this).attr("src", $(".gif").attr("data-animate"));
		// 			$(this).attr("data-state", "animate");
		// 		} else {
		// 			$(this).attr("src", $(".gif").attr("data-still"));
		// 			$(this).attr("data-state", "still");
		// 		};
		// 	});
		// },
	};

				$(".gif").on("click", function() {
				console.log("poop again");
				var state = $(this).attr("data-state");

				if (state==='still') {
					$(this).attr("src", $(".gif").attr("data-animate"));
					$(this).attr("data-state", "animate");
				} else {
					$(this).attr("src", $(".gif").attr("data-still"));
					$(this).attr("data-state", "still");
				};
			});
		giphy.populateButtons();
		giphy.addButton();
		giphy.displayGifs();
		// giphy.pauseGifs();

	});

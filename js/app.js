$(function(){

	$("#submit-btn").click(checkSubmit);

	function checkSubmit(){
		var city = $("#city-type").val();
		handleSubmit(city);
	}

	function handleSubmit(city) {
		//if(!city.trim())

		event.preventDefault();

		if(city === "NYC" || city === "New York City" || city === "New York"){
			$("body").attr("class", "nyc");
		}

		else if (city === "San Francisco" || city === "SF" || city === "Bay Area"){
			$("body").attr("class", "sf");
		}

		else if (city === "Los Angeles" || city === "LA" || city === "LAX"){
			$("body").attr("class", "la");
		}

		else if (city === "Austin" || city === "ATX"){
			$("body").attr("class", "austin");
		}

		else if (city === "Sydney" || city === "SYD"){
			$("body").attr("class", "sydney");
		}

		else
			alert("Must enter a valid city!");
	}

});
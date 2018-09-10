var question = ["I have high self worth.", "I am spiritual.", "I need to see the world.", "I see value in play", "I could you be with someone who doesn’t have the same beliefs.", "I follow my heart.", "I think confessions make a relationship stronger.", "I wouldn't change anything about my body.", "Sexual chemistry is more important than spending time together.", "I am cool under pressure."];

var count = 0;
var name = '';
var photo = '';
var surveyResults = [];

function survey() {
	$("#question").html('<p>' + question[count] + '</p>' +
					'<div class="form-check form-check-inline">' +
				  '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1">' +
				 '<label class="form-check-label" for="inlineRadio1">1</label>' +
				'</div>' +
				'<div class="form-check form-check-inline">' +
				  '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2">' +
				 '<label class="form-check-label" for="inlineRadio2">2</label>' +
				'</div>' +
				'<div class="form-check form-check-inline">' +
				  '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3">' +
				 ' <label class="form-check-label" for="inlineRadio3">3</label>' +
				'</div>' +
				'<div class="form-check form-check-inline">' +
				 '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4">' +
				 '<label class="form-check-label" for="inlineRadio2">4</label>' +
				'</div>' +
				'<div class="form-check form-check-inline">' +
				  '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5">' +
				 '<label class="form-check-label" for="inlineRadio3">5</label>' +
				'</div>' +
				'<button type="button" class="btn btn-info btn-sm">Submit</button>'
	);
	count++;	
	}
}

function nameField() {
	$("#question").html(
		'<form>' +
		  '<div class="form-group">' +
			'<label for="name">What is your name?</label>' +
			'<input type="text" class="form-control" id="name">' +
		  '</div>' +
		  '<button type="submit" class="btn btn-info btn-sm" id="nameButton">Submit</button>' +
		'</form>'
	);
	$("#box").append('<div class="alert alert-warning" role="alert" id="nameAlert">' +
		'Please enter your name' +
		'</div>');
	$("#nameAlert").hide();
}

function imageUpload() {
	$("#question").html(
		'<form>' +
		  '<div class="form-group">' +
			'<label for="name">Please enter a link to your photo</label>' +
			'<input type="text" class="form-control" id="photo">' +
		  '</div>' +
		  '<button type="submit" class="btn btn-info btn-sm" id="photoButton">Submit</button>' +
		'</form>'
	);
	$("#box").append('<div class="alert alert-warning" role="alert" id="photoAlert">' +
		'Please enter a link to your photo' +
		'</div>');
	$("#photoAlert").hide();
}




//On button click name is added
$(document).on("click", "#nameButton", function(event) {
    event.preventDefault();

    name = $("#name").val();

	if (!name) {
		$("#nameAlert").show();
	} else {
		$("#nameAlert").hide();
		imageUpload();
	}

});

//On button click photo link is added
$(document).on("click", "#photoButton", function(event) {
    event.preventDefault();

    photo = $("#photo").val();

	if (!photo) {
		$("#photoAlert").show();
	} else {
		$("#photoAlert").hide();
		survey();
	}

});


//On button click survey result is added
$(document).on("click", "#photoButton", function(event) {
    event.preventDefault();

    photo = $("#photo").val();

	if (!photo) {
		$("#photoAlert").show();
	} else {
		$("#photoAlert").hide();
		survey();
	}

});

nameField();
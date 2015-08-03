$(document).ready(function () {
	
	$('.calm-down').hide();
	//pick a random color
	function pickRandomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	}
	
	//tell user to chill if they click too much
// 	function giveItARest() {
// 	  var clickCounter = 0;  
// 	  $('#button').click(function() {
//             clickCounter++;
//             if (clickCounter > 10) {
//             $('.calm-down').show();
//             }
//       // alert('too much man... too much');
//         //$(this).attr('href', 'http://toomuch.com');
//             });

// }


	$("#button").click(function () {
	    $('#button').css({
	        'box-shadow': '5px 5px 3px #333', 
	        'color':'#111', 'text-decoration':'none', 
	        'background-color': pickRandomColor()
	    });
		$('body').css('background', pickRandomColor());
		$('h1').css('border-color', pickRandomColor());
	//	$('.calm-down').show();
	});
	
//	giveItARest();
	
});	

/*
Math.random chooses a 'random' number between 0 and 1
.toString(16) changes that number into a 16 character string
.slice(2, 8) cuts and returns a portion of the string starting
at index 2 and ending at index 8. This gives us a 6 character 
number.
We start at index 2 to make sure there are no decimal points in
the number and to make sure the number doesn't always start with 
a zero
Add the "#" to make it a hex color
*/


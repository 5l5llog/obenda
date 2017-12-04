/* javascript script targeting the collapse menu bar in small devices*/
$(document).on('click','.navbar-collapse.in',function(e) {//once the navbar clicked
    if( $(e.target).is('a') ) {//and is href
        $(this).collapse('hide');//collapse back the navigation menu
    }
});
function alertBooking(){//once the button clicked
	alert("We are currently fully booked. Please come back later.");//display this text message on screen
	return true;
}

function alertSubscription(){ //once the button clicked
	alert("Thank you for signing up to our newsletter. We will keep you in the loop.");//display this text message on screen
	return true;
}
function alertTour(){  //once the button clicked
	alert("Sorry our tickets have been sold out. Please subscribe to our newsletter to be informed about our tour next year."); //display this message on screen
	return true;
}


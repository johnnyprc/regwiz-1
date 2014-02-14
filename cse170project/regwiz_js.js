var classInfoFile = "./cse170project/cse.json";

$.getJSON(classInfoFile, function(classes){

   	// start with an empty list
   	$('#classList').empty();
   
   	// add classes to the list
	$.each(classes, function(i, className){
		$('#classList').append(generateClassLink(className));
   	});
 	
   	// refresh the page to show the updated class list
   	$('#classList').listview('refresh');
   	
   	$('#info').append(updateInfo());
   	$('#info').listview('refresh');
});

function updateInfo(){
	
}

// create a class link
function generateClassLink(className){

//		return '<li><a onclick="goToClassDetailPage(\' ' + 
//						className.name + '\',\'' + 
//						className.description + '\')"> ' + 
//						className.name + ' </a></li>';				
						
	var generateClassLink = $("<li><a onclick='goToClassDetailPage(\" " + className.name        	+ " \" , " +
																 " \" " + className.description 	+ " \" , " +
																 " \" " + className.enrollment  	+ " \" , " +
																 " \" " + className.openSeats   	+ " \" , " +
																 " \" " + className.enrollRate  	+ " \" , " +
																 " \" " + className.totalSeats  	+ " \" , " +
																 " \" " + className.timeUntilFull  	+ " \"   " +
																 ")'>" + className.name + "</a>" + "</li>");
					
	return generateClassLink
					
}

function goToClassDetailPage(name, description, enrollment, openSeats, enrollRate, totalSeats, timeUntilFull){

	var classPage = 
			$("<div data-role='page' style='background-color: lightgrey;'>" + 
		  		"<div data-role='header' data-theme='b' data-position='fixed'>" + 
		  			"<h1>" + name + "</h1>" + 
		  		"</div>" + 
		  			
			  	"<div data-role='content'>" + 
				  		"<h3> Enrollment </h3>" +	
				  		"<p> Total capacity is " + " <b>" + totalSeats + "</b></p>" +
				  		"<p> Current enrollment is " + " <b>" + enrollment + "</b></p>" +
				  		"<p> Seats avaliable are " + " <b>" + openSeats + "</b></p><hr />" +
				  		
				  		"<h3> Class Statistics </h3>" +
				  		"<p> Enrollment rate is " + " <b>" + enrollRate + " students / day</b></p>" +
				  		"<p> Estimated time until full is " + " <b>" + timeUntilFull + " days</b></p><hr />" +
				  		
				  		"<h3> Class Description </h3>" +
				  		"<p>" + description + "</p><hr />" + 
			  	"</div>" +
			  	
			  	"<div data-role='footer' data-theme='b' data-position='fixed'>" + 
			  		"<nav data-role='navbar'>" +
			  			"<ul>" +
			  			    /*
			  				"<li>" +
			  					"<a href='#homePage' data-icon='grid' " + 
			  						"data-direction='reverse'" +
			  						"data-transition='slide'>"+
			  						"My Schedule</a>" +
			  				"</li>" + 
			  				*/
			  				"<li>" +
			  					"<a href='#homePage' data-icon='home' " +
				  					"data-direction='reverse'" +
			  						"data-transition='slide'>"+
			  						"Home</a>" +
			  				"</li>" +
			  			"</ul>" +
			  		"</nav>" +
			  	"</div>" +		
			"</div>");


	 //$.mobile.defaultPageTransition = "slide"; // option to enable slide animation
	 classPage.appendTo($.mobile.pageContainer);
	
	 //go to the newly created page
	 $.mobile.changePage(classPage);
}  


function sticky_relocate() {
	var window_top = $(window).scrollTop();
	var div_top = $('#sticky-anchor').offset().top;
	if (window_top > div_top) {
		$('#headerDiv').addClass('stick');
	} 
	else {
		$('#headerDiv').removeClass('stick');
	}
}

$(function() {
	$(window).scroll(sticky_relocate);
	sticky_relocate();
});
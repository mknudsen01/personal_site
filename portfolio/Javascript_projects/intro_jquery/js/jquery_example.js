$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'pink'});
 
//RELEASE 1:
  //Add code here to select elements of the DOM 
 var $headers = $('h1');
 var $mascot = $('.mascot');
 var $bodyElement = $('body');
 var $cohort = ($headers[1]);
 
//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
 $headers.css({'color':'brown','border':'1px dotted black','background-color':'yellow'});
 $('.mascot h1').html('BANANA SLUGS');
 
//RELEASE 3: Event Listener
  // Add the code for the event listener here 
  $('img').on('mouseover', function(e){
     e.preventDefault();
    $(this).attr('src', 'img/ban_slug.png');
  }).on('mouseout',function(e){
    e.preventDefault();
    $(this).attr('src', 'img/dbc_logo.png');
  });
 
 
//RELEASE 4 : Experiment on your own
$('img').click(function(){
  $(this).animate({
    position: "absolute",
    borderWidth: "+=1px",
    width: "+=20px",
    left: '+=30px'
  }, 1000);
  $('h1').animate({
    fontSize:"-=0.1em"
  });
});
 
 
});  // end of the document.ready function: do not remove or write DOM manipulation below this.
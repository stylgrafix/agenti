$(window).resize(function() { 

	resizeDashboard();   

});


function resizeDashboard() {

	
	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			
	//background resize				
					    		
	
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
		
		//intro div resize
		//$("#dashboard-intro").css('height', theWindow.height()-$(".navbar").height());
		
		/*
		if( theWindow.width() > 991 ) {
			$("#intro-content-wrap").css('padding-top', theWindow.height()-$(".navbar").height()-$("#intro-content-wrap").height()-30 );
		}else {
			$("#intro-content-wrap").css('padding-top', 0 );
		};
	*/

};


$(document).ready(function() {
	
	
		resizeDashboard();

	    //startTime();
 	/*
	  setInterval( function() {
	  var seconds = new Date().getSeconds();
	  var sdegree = seconds * 6;
	  var srotate = "rotate(" + sdegree + "deg)";
	  
	  $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
		  
	  }, 1000 );
	  
 
	  setInterval( function() {
	  var hours = new Date().getHours();
	  var mins = new Date().getMinutes();
	  var hdegree = hours * 30 + (mins / 2);
	  var hrotate = "rotate(" + hdegree + "deg)";
	  
	  $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
		  
	  }, 1000 );


	  setInterval( function() {
	  var mins = new Date().getMinutes();
	  var mdegree = mins * 6;
	  var mrotate = "rotate(" + mdegree + "deg)";
	  
	  $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
		  
	  }, 1000 );
	
	  
var d=new Date();
var weekday=new Array(7);
weekday[0]="Domenica";
weekday[1]="Lunedì";
weekday[2]="Martedì";
weekday[3]="Mercoledì";
weekday[4]="Giovedì";
weekday[5]="Venerdì";
weekday[6]="Sabato";

var data = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

var w = weekday[d.getDay()]; 
	  
	  $("#dayofweek").html(w+" "+data);
   */
}); 


function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('time').innerHTML=h+":"+m+":"+s;
t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
if (i<10) 
  {
  i="0" + i;
  }
return i;
}





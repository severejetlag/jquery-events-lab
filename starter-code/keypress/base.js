console.log("Sanity Check: JS is working!");

var startTime;
var endTime;
var totalTime = 0; 
$(document).ready(function(){
	$(window).on('keypress',function(){
		if(startTime && startTime !== 0){
			endTime = Date.now();
			totalTime = endTime - startTime;
			$('#total-time').text(totalTime/1000);
			startTime = 0;
		}else {
			startTime = Date.now();
		}
	})
})

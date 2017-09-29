console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("#imperatives span").on('click',function(event){
		var insertText = $(this).text();
		$('ul').append(`<li>${insertText} at ${Date.now()}</li>`)
	})
})

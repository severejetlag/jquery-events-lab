console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('input.add').on('change',function(){
  	var leftVal = $("#left").val();
    var rightVal = $("#right").val();
    var num1 = parseInt(leftVal) || 0;
    var num2 = parseInt(rightVal) || 0;
    var total = num1 + num2;
    $("#total").val(total);
  })

})

$(document).ready(function() {

	$("td").on("click", function (){
		var number = $(this).attr("data-id"); 
		data.forEach(function (val) {
			//console.log(typeof number);
			//console.log(typeof val.id);
			if (parseInt(number) === val.id) {
				$(".board").fadeOut
				$("td").fadeIn()
			}
		});
	});

	function showQuestion (){
		
	}

});
$(document).ready(function() {

//define variables and functions on highest scope needed
 	var form = $("<form action='javascript:void(0);'class ='answerForm'></form>");
 	var submit = $("<input type='submit' value='Submit Answer'>");
 	var answer;
 	var counter = 0;
 	var playerOneScore = 0;
 	var playerTwoScore = 0;

 	function identifyTurn () {
			$(".row-plyr1").css("border", "none");
			$(".row-plyr2").css("border", "none");
			if (counter%2===0) {
				$(".row-plyr1").css("border", "4px solid #994500");
				//alert("It's Player One's Turn. Please choose a question.");
			} else {
				$(".row-plyr2").css("border", "4px solid #994500");
				//alert("It's Player Two's Turn. Please choose a question.");
			}
 	}

 	function answerIsCorrect (answer) {
		return $("input[type=radio]:checked").next().text() === answer;
 	}

 	identifyTurn();

//add an event listener to each td element so that...
//when the element is clicked...
	$("td").on("click", function (){
		$(this).empty();
		//number = the clicked td's data-id# (from html)
		var number = $(this).attr("data-id"); 
		var amount = parseInt($(this).attr("data-amt")); 
		//alert (typeof amount);

//stop at each object of the array	
		data.forEach(function (val) {
//if number(converted to integer) = the data id#
			if (parseInt(number) === val.id) {
				var label1 = ("<label>"+ val.mcAnswer1 + "</label>");
 				var label2 = ("<label>" + val.mcAnswer2 + "</label>"); 
 				var label3 = ("<label>" + val.mcAnswer3 + "</label>");
				
				$(".board").fadeOut(400, function () {
					$("#choice p").fadeIn(400);
				}); 

				$("#choice p").empty();
				$("#choice p").append(val.question);
				$("#choice p").append(form);

				form.empty();
				var radio1 = $("<input type='radio' name='answer'>");
 				var radio2 = $("<input type='radio' name='answer'>");
 				var radio3 = $("<input type='radio' name='answer'>");
				form.append(radio1);
				form.append(label1);				
				form.append(radio2);
				form.append(label2);
				form.append(radio3);
				form.append(label3);
				form.append(submit);
   
				answer = val.realAnswer;
			}
		});

		$(".answerForm").on("submit",function(e){
			e.preventDefault();
	 		if(answerIsCorrect(answer)){
	 			if (counter%2===0) {
	 				playerOneScore += amount;
	 			} else {
	 				playerTwoScore += amount;
	 			}
	 			alert("You are correct!");
	 		}
	 		else{
	 			alert("Sorry, that was incorrect. The correct answer is " + answer);
	 			counter++;
	 		}

	 		$(".row-plyr1 .score").text(playerOneScore);
	 		$(".row-plyr2 .score").text(playerTwoScore);

	 		
	 		$("#choice p").fadeOut(400, function () {
	 			$(".board").fadeIn(400, function (){
	 				
	 			}) ;
	 		});	
		});	
	});

});
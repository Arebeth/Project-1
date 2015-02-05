$(document).ready(function() {

//define variables and functions on highest scope needed
 	var form = $("<form action='javascript:void(0);'class ='answerForm'></form>");
 	var submit = $("<input type='submit' value='Submit Answer'>");
 	var answer;
 	var counter = 0;
 	var playerOneScore = 0;
 	var playerTwoScore = 0;
 	$(".row-plyr1").addClass("currentTurn");

 	function identifyTurn () {
			if (counter%2===0) {
				// turn on currentTurn class for player one, turn it off for player 2
				$(".row-plyr1").toggleClass("currentTurn"); //chose to highlight the player instead of alerting player rotation
				$(".row-plyr2").toggleClass("currentTurn");
			} else {
				// turn on currentTurn class for player two, turn it off for player one
				$(".row-plyr1").toggleClass("currentTurn");
				$(".row-plyr2").toggleClass("currentTurn");
			}
 	}

 	function answerIsCorrect (answer) {  //used method extraction to refactor a confusing piece of code
		return $("input[type=radio]:checked").next().text() === answer; //return the text of the label next to the radio
 	}

 	
 	
 	
 	console.log(counter);

	$("td").on("click", function (){
		$(this).empty();
		var number = $(this).attr("data-id"); 
		var amount = parseInt($(this).attr("data-amt")); 
		//alert (typeof amount); -- keeping this zombie code for posterity as a way to remember typeof


		data.forEach(function (val) {

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
				var radio1 = $("<input type='radio' name='answer'>"); //moved variables to prevent radio click position from locking
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
		}); //end of form appending

		$(".answerForm").on("submit",function(e){
			e.preventDefault();

	 		if(answerIsCorrect(answer)){
	 			alert("You're correct! It's your turn again!");
	 			if (counter%2===0) {
	 				playerOneScore += amount;
	 				
	 			} else {
	 				playerTwoScore += amount;
	 			}
	 			
	 		}
	 		else{
	 			alert("Sorry, that was incorrect. The correct answer is " + answer);
	 			counter++;
	 			identifyTurn(); //player rotation function - ONLY CALL WHEN ANSWER IS INCORRECT
	 			if(counter % 2 === 0){
	 				alert("It is now player one's turn!");
	 			}
	 			else{
	 				alert("It is now player two's turn!");
	 			}
	 			
	 		}
	 		
	 		console.log(counter);

	 		$(".row-plyr1 .score").text(playerOneScore);
	 		$(".row-plyr2 .score").text(playerTwoScore);

	 		
	 		$("#choice p").fadeOut(400, function () {
	 			$(".board").fadeIn(400, function (){});
	 		});
		});	//end of on-click for submit button
	});

});
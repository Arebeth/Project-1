$(document).ready(function() {

//define variables and functions on highest scope needed
 	var form = $("<form action='javascript:void(0);'class ='answerForm'></form>");
 	var submit = $("<input type='submit' value='Submit Answer'> class='submitButton'");
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

 	function disableCell(cell) {
 		$(cell).addClass("alreadyAnswered");
 	}
//done defining functions

//begin game play
	$("td").on("click", function (){ //on click of question (in td)
		if ($(this).hasClass("alreadyAnswered")) {
			return;
		}
		$(this).empty(); //empty the value of the cell to show it has been clicked
		disableCell(this); //NOT WORKING YET - disable the cell to prevent it from being clicked again
		var number = $(this).attr("data-id"); 
		var amount = parseInt($(this).attr("data-amt")); 
		//alert (typeof amount); -- keeping this zombie code for posterity as a way to remember typeof


		data.forEach(function (val) {

			if (parseInt(number) === val.id) {
				var answer1 = ("<label> <input type='radio' name='answer' class='radio'>" + " " + val.mcAnswer1 + "</label><br>");
 				var answer2 = ("<label> <input type='radio' name='answer' class='radio'>" + " " + val.mcAnswer2 + "</label><br>"); 
 				var answer3 = ("<label> <input type='radio' name='answer' class='radio'>" + " " + val.mcAnswer3 + "</label><br>");
				
				$(".board").fadeOut(400, function () {
					$("#choice p").fadeIn(400);
				}); 

				$("#choice p").empty();
				$("#choice p").append("<span>" + val.question+ "</span>");
				$("#choice p").append(form);

				form.empty();
				//var radio1 = $("<input type='radio' name='answer' class='radio'>"); //moved variables to prevent radio click position from locking
 				//var radio2 = $("<input type='radio' name='answer' class='radio'>");
 				//var radio3 = $("<input type='radio' name='answer' class='radio'>");
				//form.append(radio1);
				form.append(answer1);			
				//form.append(radio2);
				form.append(answer2);
				//form.append(radio3);
				form.append(answer3);
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

	 		$(".row-plyr1 .score").text(playerOneScore);
	 		$(".row-plyr2 .score").text(playerTwoScore);

	 		$("#choice p").fadeOut(400, function () {
	 			$(".board").fadeIn(400, function (){});
	 		});
		});	//end of on-click for submit button
	});

});
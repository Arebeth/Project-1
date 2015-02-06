$(document).ready(function() {

//define variables and functions on highest scope needed
 	var form = $("<form action='javascript:void(0);'class ='answerForm'></form>");
 	var submit = $("<input type='submit' value='Submit Answer'> class='submitButton'");
 	var answer;
 	var counter = 0;
 	var playerOneScore = 0;
 	var playerTwoScore = 0;
 	$(".row-plyr1").addClass("currentTurn");
 	var questionCounter = 0;

 	function identifyTurn () {  //check player turns by toggling class 
				$(".row-plyr1").toggleClass("currentTurn"); //chose to highlight the player instead of alerting player rotation
				$(".row-plyr2").toggleClass("currentTurn");
 	}

 	function answerIsCorrect (answer) {  //used method extraction to refactor a confusing piece of code
		return $("input[type=radio]:checked").next().text() === answer; //return the text of the span next to the radio
 	}

 	function disableCell(cell) { //disables cell and adds "alreadyAnswered" class
 		$(cell).addClass("alreadyAnswered");
 		questionCounter++;
 	}

 	function determineWinner () { //if all questions have been answered, determine the winner and stop the game.
 		if (questionCounter === 25) {
			if (playerOneScore > playerTwoScore) {
				alert("The game is over. Player One is the winner.");
			} else if (playerOneScore < playerTwoScore) {
				alert("The game is over. Player Two is the winner.");
			} else {
				alert("The game is over. Players are tied. Everyone is a winner.");
			}
 		}
 	}	
//done defining functions

//begin game play
	$("td").on("click", function (){ //on click of question (in td)
		if ($(this).hasClass("alreadyAnswered")) { //if td has class already answered, return out of function to prevent another click
			return;
		}
		$(this).empty(); //empty the value of the cell 
		disableCell(this); //disables the cell to prevent it from being clicked again
		var number = $(this).attr("data-id"); 
		var amount = parseInt($(this).attr("data-amt")); 

		data.forEach(function (val) {  //loop through data array (in data.js) and on the instance of each object...

			if (parseInt(number) === val.id) {  //find the object whose id value = the integer from the data-id (in page3.html)
				var answer1 = ("<label> <input type='radio' name='answer' class='radio'> <span>" + val.mcAnswer1 + "</span></label><br>");
 				var answer2 = ("<label> <input type='radio' name='answer' class='radio'> <span>" + val.mcAnswer2 + "</span></label><br>"); 
 				var answer3 = ("<label> <input type='radio' name='answer' class='radio'> <span>" + val.mcAnswer3 + "</span></label><br>");
				
				$(".board").fadeOut(400, function () {  //then fade out the game board
					$("#choice p").fadeIn(400);  // after the fade out, fade in the paragraph tag within the div w/ id=choice and...
				}); 

				$("#choice p").empty(); //empty any previous values 
				$("#choice p").append("<span class='question'>" + val.question+ "</span>"); //then add the value to the question key from the object
				$("#choice p").append(form); //then add form

				form.empty(); //empty any previous values 
				form.append(answer1);	//add answers and submit button to the form		
				form.append(answer2);   	
				form.append(answer3);   
				form.append(submit);   
   
				answer = val.realAnswer;  //set answer to the realAnswer value in the object
			}
		}); //end of form appending

		$(".answerForm").on("submit",function(e){   //when the answer is submitted,
			e.preventDefault();                     //prevent immediate action

	 		if(answerIsCorrect(answer)){            //if they chose the correct answer 
	 			alert("You are correct!");
	 			if (counter%2===0) {                //alert it's correct and give points to the correct player
	 				playerOneScore += amount;       
	 				
	 			} else {
	 				playerTwoScore += amount;       
	 			}		
	 		}
	 		else{                                   //if they choose incorrectly, alert and add to counter to change turns. game designed not to deduct points.
	 			alert("Sorry, that was incorrect. \n\nThe correct answer is " + answer);
	 			counter++;
	 			identifyTurn(); //player rotation function - ONLY CALL WHEN ANSWER IS INCORRECT		
	 		}

	 		$(".row-plyr1 .score").text(playerOneScore);  //scorekeeping
	 		$(".row-plyr2 .score").text(playerTwoScore);

	 		$("#choice p").fadeOut(400, function () {     //once turn has changed, fade out answer and then fade board back in
	 			$(".board").fadeIn(400, function (){});
	 		});
	 	determineWinner(); //check if game is over
		});	//end of on-click for submit button
	});

});
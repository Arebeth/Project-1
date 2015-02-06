$(document).ready(function() {

//define variables and functions on highest scope needed
 	var form = $("<form action='javascript:void(0);'class ='answerForm'></form>");
 	var submit = $("<input type='submit' value='Submit Answer'> class='submitButton'");
 	var answer;
 	var counter = 0;
 	var playerOneScore = 0;
 	var playerTwoScore = 0;
 	$(".row-plyr1").addClass("currentTurn");

 	function identifyTurn () {  //check player turns by toggling class -- keeping zombie code to show refactor
			//if (counter%2===0) {
				// turn on currentTurn class for player one, turn it off for player 2
				$(".row-plyr1").toggleClass("currentTurn"); //chose to highlight the player instead of alerting player rotation
				$(".row-plyr2").toggleClass("currentTurn");
			//} else {
				// turn on currentTurn class for player two, turn it off for player one
			//	$(".row-plyr1").toggleClass("currentTurn");
			//	$(".row-plyr2").toggleClass("currentTurn");
			//}
 	}

 	function answerIsCorrect (answer) {  //used method extraction to refactor a confusing piece of code
		return $("input[type=radio]:checked").next().text() === answer; //return the text of the label next to the radio
 	}

 	function disableCell(cell) { //disables cell and adds "alreadyAnswered class"
 		$(cell).addClass("alreadyAnswered");
 	}

 	// function determineWinner () {  //tried to add a function to determineWinner, but ran out of time to debug.
 	// 	var continueGame = false;
 	// 	$("td").forEach(function () {	
 	// 		if ($(this).hasClass("alreadyAnswered")) {
 				
 	// 		} else {
 	// 			continueGame = true;
 	// 		} 
 	// 	});
 	// 	if (continueGame === false) {
 	// 		alert("The game is over.");
 	// 	}	
 	// }
 		
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
		//alert (typeof amount); -- keeping this zombie code for posterity as a way to remember typeof


		data.forEach(function (val) {  //loop through data array (in data,js) and on the instance of each object...

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

				form.empty(); //empty any previous values -- keeping zombie code to show refactor
				//var radio1 = $("<input type='radio' name='answer' class='radio'>"); //moved variables to prevent radio click position from locking
 				//var radio2 = $("<input type='radio' name='answer' class='radio'>");
 				//var radio3 = $("<input type='radio' name='answer' class='radio'>");
				//form.append(radio1);
				form.append(answer1);	//add answer 1 to the form		
				//form.append(radio2);
				form.append(answer2);   //add answer 2 to the form	
				//form.append(radio3);
				form.append(answer3);   //add answer 3 to the form	
				form.append(submit);    //add submit button to the form
   
				answer = val.realAnswer;  //set answer to the realAnswer value in the object
			}
		}); //end of form appending

		$(".answerForm").on("submit",function(e){   //when the answer is submitted,
			e.preventDefault();                     //prevent immediate action

	 		if(answerIsCorrect(answer)){            //if they chose the correct answer 
	 			alert("You're correct! It's your turn again!");
	 			if (counter%2===0) {                //alert it's correct and give points to the correct player
	 				playerOneScore += amount;       
	 				
	 			} else {
	 				playerTwoScore += amount;       
	 			}		
	 		}
	 		else{                                   //if they choose incorrectly, alert and add to counter to change turns. game designed not to deduct points.
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

	 		$(".row-plyr1 .score").text(playerOneScore);  //scorekeeping
	 		$(".row-plyr2 .score").text(playerTwoScore);

	 		$("#choice p").fadeOut(400, function () {     //once turn has changed, fade out answer and then fade board back in
	 			$(".board").fadeIn(400, function (){});
	 		});
	 	//determineWinner(); -- determineWinner function was removed until it can be debugged.
		});	//end of on-click for submit button
	});

});
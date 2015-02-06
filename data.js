//"data" = array of objects, each of which are trivia questions
var data = [
//each question includes question + 3 multiple choice answers, a true answer and id
//id corresponds with data-id in html
{
	question: "When the referees make a bad call...",
	mcAnswer1: "What a bunch of malarkey!",
	mcAnswer2: "Fuck it all.",
	mcAnswer3: "Well gooooooodnight.",
	realAnswer: "Fuck it all.",
	id: 1,
	category: "Category A"
},
{
	question: "what is your name 2?",
	mcAnswer1: "easy",
	mcAnswer2: "as",
	mcAnswer3: "do re me",
	realAnswer: "do re me",
	id: 2,
	category: "Category B"
},
{
	question: "What grade did Elie get in microeconomics because he partied too hard?",
	mcAnswer1: "a",
	mcAnswer2: "b",
	mcAnswer3: "c",
	realAnswer: "c",
	id: 3,
	category: "Category C",
},
{
	question: "what is your name?",
	mcAnswer1: "a",
	mcAnswer2: "b",
	mcAnswer3: "c",
	realAnswer: "c",
	id: 4,
	category: "Category D"
},
{
	question: "Where did he conceive his first child?",
	mcAnswer1: "In a strawberry patch.",
	mcAnswer2: "In a blueberry patch.",
	mcAnswer3: "In the privacy of their home.",
	realAnswer: "In a strawberry patch.",
	id: 5,
	category: "Category E"
},
{
	question: "During the 15 seconds it takes to get more than 2 people in the door...",
	mcAnswer1: "Shut the front door.",
	mcAnswer2: "Shut the door - it's cold in here!",
	mcAnswer3: "Shut up.",
	realAnswer: "Shut the door - it's cold in here!",
	id: 6,
	category: "Category A"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 7,
	category: "Category B"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 8,
	category: "Category C"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 9,
	category: "Category D"
},
{
	question: "What did he wear one epic St. Patrick's Day?",
	mcAnswer1: "A green tuxedo with tails and a top hat.",
	mcAnswer2: "A mint green polyester liesure suit and a black t-shirt.",
	mcAnswer3: "My grandmother's dress (on a bet).",
	realAnswer: "A mint green polyester liesure suit and a black t-shirt.",
	id: 10,
	category: "Category E"
},
{
	question: "Every Christmas...",
	mcAnswer1: "It's good to see you!",
	mcAnswer2: "Thank you for coming such a long way!",
	mcAnswer3: "Turn off 'A Christmas Story', it's time to watch 'Neil Diamond Christmas Special!'",
	realAnswer: "Turn off 'A Christmas Story', it's time to watch 'Neil Diamond Christmas Special!'",
	id: 11,
	category: "Category A"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 12,
	category: "Category B"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 13,
	category: "Category C"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 14,
	category: "Category D"
},
{
	question: "What did Crazy Carl tie to a pull-chain in the ladies' bathroom of a local restaurant?",
	mcAnswer1: "A wet sock.",
	mcAnswer2: "His underwear.",
	mcAnswer3: "A dead rabbit.",
	realAnswer: "A dead rabbit.",
	id: 15,
	category: "Category E"
},
{
	question: "When Neil Diamond sings Silent Night...",
	mcAnswer1: "This is my favorite Christmas Carol.",
	mcAnswer2: "He is a snappy dresser.",
	mcAnswer3: "He is so sexy!",
	realAnswer: "He is so sexy!",
	id: 16,
	category: "Category A"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 17,
	category: "Category B"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 18,
	category: "Category C"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 19,
	category: "Category D"
},
{
	question: "In high school, what did he and some friends do to the principal's Model T car?",
	mcAnswer1: "Parked it in the town's bandstand.",
	mcAnswer2: "Hid it in the woods.",
	mcAnswer3: "Parked it down the street.",
	realAnswer: "Parked it in the town's bandstand.",
	id: 20,
	category: "Category E"
},
{
	question: "Every time the Yankees lose...",
	mcAnswer1: "*cries*",
	mcAnswer2: "The opposing team is cheating.",
	mcAnswer3: "The referees are cheating.",
	realAnswer: "*cries*",
	id: 21,
	category: "Category A"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 22,
	category: "Category B"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 23,
	category: "Category C"
},
{
	question: "what is your name?",
	mcAnswer1: "",
	mcAnswer2: "",
	mcAnswer3: "",
	realAnswer: "answer",
	id: 24,
	category: "Category D"
},
{
	question: "Crazy Carl ran away from home when he was 16 and hitchhiked to Texas to work for a summer. He met crazy people and did a bunch of crazy things, including riding on the top of train cars. Where did he have to sleep one night on the trip back?",
	mcAnswer1: "At a rest stop.",
	mcAnswer2: "On the side of the road.",
	mcAnswer3: "In a watermelon patch.",
	realAnswer: "In a watermelon patch.",
	id: 25,
	category: "Category E"
}];
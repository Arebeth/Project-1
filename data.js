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
	question: "Gone Girl, Fight Club, The Girl with the Dragon Tatoo",
	mcAnswer1: "David O. Russell",
	mcAnswer2: "David Fincher",
	mcAnswer3: "David Lynch",
	realAnswer: "David Fincher",
	id: 2,
	category: "Category B"
},
{
	question: "What grade did Elie get in microeconomics because he partied too hard?",
	mcAnswer1: "A",
	mcAnswer2: "B",
	mcAnswer3: "C",
	realAnswer: "C",
	id: 3,
	category: "Category C",
},
{
	question: "The language used to describe and define the content of a Web page in a structured format",
	mcAnswer1: "HTML",
	mcAnswer2: "CSS",
	mcAnswer3: "Javascript",
	realAnswer: "HTML",
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
	question: "Crouching Tiger, Hidden Dragon; Life of Pi; Brokeback Mountain",
	mcAnswer1: "Ang Lee",
	mcAnswer2: "Angela Lansbury",
	mcAnswer3: "Lee Majors",
	realAnswer: "Ang Lee",
	id: 7,
	category: "Category B"
},
{
	question: "An association between a name and a value",
	mcAnswer1: "Argument",
	mcAnswer2: "Property",
	mcAnswer3: "For Loop",
	realAnswer: "Property",
	id: 8,
	category: "Category C"
},
{
	question: "Used to describe the appearance of Web content",
	mcAnswer1: "HTML",
	mcAnswer2: "CSS",
	mcAnswer3: "Javascript",
	realAnswer: "CSS",
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
	question: "Seven Samurai, Yojimbo, A Fistful of Dollars",
	mcAnswer1: "Toshiro Mifune",
	mcAnswer2: "Takashi Shimura",
	mcAnswer3: "Akira Kurosawa",
	realAnswer: "Akira Kurosawa",
	id: 12,
	category: "Category B"
},
{
	question: "A collection of properties",
	mcAnswer1: "Value",
	mcAnswer2: "Function",
	mcAnswer3: "Object",
	realAnswer: "Object",
	id: 13,
	category: "Category C"
},
{
	question: "A fast, small, and feature-rich Javascript library",
	mcAnswer1: "JSON",
	mcAnswer2: "Jquery",
	mcAnswer3: "Java",
	realAnswer: "JQuery",
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
	question: "Magnolia, There Will Be Blood, Inherent Vice",
	mcAnswer1: "Paul Thomas Anderson",
	mcAnswer2: "Woody Allen",
	mcAnswer3: "Frank Capra",
	realAnswer: "Paul Thomas Anderson",
	id: 17,
	category: "Category B"
},
{
	question: "Executable code that is passed as an argument to another function",
	mcAnswer1: "Variable",
	mcAnswer2: "Selector",
	mcAnswer3: "Callback",
	realAnswer: "Callback",
	id: 18,
	category: "Category C"
},
{
	question: "A lightweight data-interchange format",
	mcAnswer1: "HTML",
	mcAnswer2: "JSON",
	mcAnswer3: "Ajax",
	realAnswer: "JSON",
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
	question: "The Man Who Knew Too Much, Rebecca, The Lady Vanishes",
	mcAnswer1: "Alfred Hitchcock",
	mcAnswer2: "Martin Scorcese",
	mcAnswer3: "Stanley Kubrick",
	realAnswer: "Alfred Hitchcock",
	id: 22,
	category: "Category B"
},
{
	question: "A function that knows how to access items from a collection one at a time while keeping track of its current position within that sequence",
	mcAnswer1: "Method",
	mcAnswer2: "Loop",
	mcAnswer3: "Iterator",
	realAnswer: "Iterator",
	id: 23,
	category: "Category C"
},
{
	question: "A dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan.",
	mcAnswer1: "Ruby",
	mcAnswer2: "Ajax",
	mcAnswer3: "Python",
	realAnswer: "Ruby",
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
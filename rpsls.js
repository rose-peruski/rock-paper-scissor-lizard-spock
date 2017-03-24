// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock

/*1.rock
2. paper
3. scisssors */

var sget = require("sget");
var userGuess;
var computerGuess; 

var gameArray = ["rock", "paper", "scissors", "lizard", "spock"];//make object with key value pair

var mainMenuMessages = {
					welcome: "\n**********************************************************************\n" +
								"               Rock...Paper...Scissors...Lizard...Spock!    " +
								"\n**********************************************************************\n",
					onePlayer: "1. 1-Player press 1 ",
					twoPlayer:"2. 2 player press 2 ",
					view: "3. View Rules press 3",
					exit: "4. To exit, type 'exit' or press "	

					};

var winMessages= { 
					scissorWinPaper: "Scissors cuts Paper",
					paperWinRock: "Paper covers Rock ",
					lizardWinSpock: "Rock crushes Lizard ",
					spockWinScissors: "Lizard poisons Spock",
					scissorsWinLizard: "Scissors decapitates Lizard",
					lizardWinPaper: "Lizard eats Paper",
					paperWinSpock: "Paper disproves Spock",
					spockWinRock: "Spock vaporizes Rock"
					
					};

var userOptions = {
					main: "please type one of the following",
					rock: "rock",
					paper: "paper",
					scissors: "scissors",
					lizard: "lizard",
					spock: "Spock",
					

};					

var printMenu = function() {
    for (var key in mainMenuMessages) {
      console.log(mainMenuMessages[key]);
    }
};

var printWinMessages = function () {
	for (var key in winMessages) {
      console.log(winMessages[key]);
    }
    returnToMain();
};

var printUserOptions = function () {
	for (var key in userOptions) {
      console.log(userOptions[key]);
    }
};

var mainMenu = function() {
	//present user with options 
	

	wipeScreen();
	printMenu();
	var userSelection = sget("Make your selection:").trim();
		userSelection=userSelection.toLowerCase();
		if(userSelection==1 ) {
			makeGuess();
		} else if (userSelection==2) {
			console.log("This feature is in the next version");
		} else if (userSelection==3) {
			printWinMessages();
		} else if (userSelection=='exit' || userSelection==4) {
			exitProgram();
		
		}else {
			console.log(userMessages.invalid);
			returnToMain();
			
		}

};

var exitProgram= function(){
	process.exit();
}
var getUserGuess = function() {
	printUserOptions();
	userGuess = sget().trim();
	userGuess= userGuess.toLowerCase();
	


};

var getComputerGuess = function() {
	computerGuess = Math.floor((Math.random() * gameArray.length) + 1);
	
	switch(true) {
	case (computerGuess==1):
		computerGuess = "rock";
		break;
	 case (computerGuess==2):
		computerGuess = "paper";
		break;
	case (computerGuess==3):
		computerGuess= "scissors";
		break;
	case (computerGuess==4):
		computerGuess="lizard";
		break;
	case (computerGuess==5):
		computerGuess='spock';
		break;	
	default:
		console.log("Something went wrong");
}	
};	

var makeGuess = function() {
	
	getUserGuess();
	console.log("Your guess: " +userGuess);
	getComputerGuess();
	console.log("computer guess: " +computerGuess);
	
	checkGuess();
};

var checkGuess = function() {
	
	switch (true) { 
		case userGuess=="rock" && computerGuess=="scissors":
			console.log("rock crushes scissors!");
			break;
		case userGuess=="rock" && computerGuess=="paper":
			console.log("paper covers rock!");
			break;
 		case userGuess=="paper" && computerGuess=="rock":
			console.log("paper covers rock!");
			break;
		case userGuess=="paper" && computerGuess=="scissors":
			console.log("Scissors cut paper!");
			break;
		case userGuess=="scissors" && computerGuess=="rock": 
			console.log("rock crushes scissors!");
			break;	
		case userGuess=="scissors" && computerGuess=="paper": 
			console.log("scissors cut paper!");
			break;
		case userGuess=="lizard" && computerGuess=="paper": 
			console.log("lizard eats paper!");
			break;	
		case userGuess=="lizard" && computerGuess=="spock": 
			console.log("lizard poisons Spock!");
			break;	
		case userGuess=="spock" && computerGuess=="scissors": 
			console.log("Spock smashes scissors");
			break;	
		case userGuess=="spock" && computerGuess=="rock": 
			console.log("Spock vaporizes rock!");
			break;		


		case userGuess==computerGuess: 
			console.log("its a tie!");
			break;			
		default:
			console.log("no one wins, try again");



}
	returnToMain();
};

//----------------HELPFUL TOOLS---------------------------


//clean screen
var wipeScreen = function () {
  return process.stdout.write('\033c');
};



var returnToMain = function () {
	var returnToMain = sget("\nPress any key to return to main menu when ready.").trim();
	mainMenu();
};

//-------------------------------------------------------

var runProgram = function() {
	mainMenu();
}();










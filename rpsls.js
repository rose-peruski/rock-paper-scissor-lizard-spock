// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock

var sget = require("sget");
var userGuess;
var computerGuess; 

var gameArray = ["rock", "paper", "scissors", "lizard", "spock"];

var mainMenuMessages = {
					welcome: "\n**********************************************************************\n" +
								"               Rock...Paper...Scissors...Lizard...Spock!    " +
								"\n**********************************************************************\n",
					add: "1. 1-Player press 1 ",
					delete:"2. 2 player press 2 ",
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
			addItem();
		} else if (userSelection==2) {
			deleteItem();
		} else if (userSelection==3) {
			searchItem();
		} else if (userSelection==4) {
			modifyStock();
		} else if (userSelection==5) {
			modifyDescription();
		} else if (userSelection==6) {			
			viewStore();
		} else if (userSelection=='exit' || userSelection==7) {
			exitProgram();
		
		}else {
			console.log(userMessages.invalid);
			returnToMain();
			
		}

};

var getUserGuess = function() {
	printUserOptions();
	getUserGuess = sget().trim();
	getUserGuess= getUserGuess.toLowerCase();


};

var getComputerGuess = function() {
	var computerGuess = Math.floor((Math.random() * gameArray.length) + 1);
	console.log(computerGuess);

};

var makeGuess = function() {
	getUserGuess();
	getComputerGuess();
	

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
	getComputerGuess();
}();










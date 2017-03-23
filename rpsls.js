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

var mainMenuMessages = {
					welcome: "\n**********************************************************************\n" +
								"               Rock...Paper...Scissors...Lizard...Spock!    " +
								"\n**********************************************************************\n",
					add: "1. To add a product, press 1 ",
					delete:"2. To delete a product or press 2 ",
					search: "3. To search for a product press 3",
					modify: "4. To modify the amount of stock for a product press 4 ",
					product: "5. To modify a product's description, press 5",
					view: "6. To see the entire store, press 6",
					exit: "7. To exit, type 'exit' or press 7"	

					};

var userMessages= { 
					description: "Enter product description:",
					price: "Enter product price: ",
					inventory: "Enter number of items available: ",
					productNotFound: "Product not found",
					invalid: "Invalid entry"
					};

var printMenu = function() {
    for (var key in mainMenuMessages) {
      console.log(mainMenuMessages[key]);
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
	getUserGuess = sget(userMessages.description).trim();
	getUserGuess= getUserGuess.toLowerCase();
};

var getComputerGuess = function() {
	getComputerGuess = sget(userMessages.price).trim();
	getComputerGuess= parseFloat(getComputerGuess);
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












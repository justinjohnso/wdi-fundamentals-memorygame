console.log("JS file is connected to HTML! Woo!")

// Sets the top two cards as queens and 
// the bottom two as kings

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardTwo == cardFour){
// 	alert("You found a match!");
// }
// else{
// 	alert("Whoops, those cards don't match! Try again!");
// }

for (var i = 0; i < 4; i++) {
	var gameBoard = document.getElementById('game-board');
	var gameCard = document.createElement('div');
		gameCard.setAttribute('class', 'card');

	gameBoard.appendChild(gameCard);
	console.log ("Created card # " + (i+1));
}


// for (var i = 0; i < 4; i++) {
//     var divElement = document.getElementsByTagName("div")[0];
//     el = document.createElement("p");
//     content = document.createTextNode("This is text");    

// 	el.appendChild(content);
// 	divElement.appendChild(el);   
// }

// for (var i = 0; i < 4; i++) {
// 	document.getElementById('game-board')[0].appendChild(gameCard);
// 	console.log ("Created card # " + (i+1));
// }


// First up, let's create a new list item and store it in a variable.
// var newListItem = document.createElement('div');
// // Alright! Now let's update the text content of that list item.
// newListItem.textContent = 'Feed the cat';
// // And Finally...let's add that list item as a child of the ul.
// // document.getElementById('game-board')[0].appendChild(newListItem);

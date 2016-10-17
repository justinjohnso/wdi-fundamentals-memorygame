console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king', 'jack', 'jack', 'ace', 'ace'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var gameCard = document.createElement('div');
			gameCard.setAttribute('class', 'card');
			gameBoard.appendChild(gameCard);
			gameCard.setAttribute('data-card', cards[i]);
			gameCard.addEventListener('click', isTwoCards);
		console.log ("Created card # " + (i+1));
	}
}

function isTwoCards(){
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == 'king'){
		this.innerHTML = "<img src='cards/overwatch_king.jpg'>";
	}
	else if (this.getAttribute('data-card') == 'queen'){
		this.innerHTML = "<img src='cards/overwatch_queen.jpg'>";
	}
	else if (this.getAttribute('data-card') == 'jack'){
		this.innerHTML = "<img src='cards/overwatch_jack.jpg'>";
	}
	else if (this.getAttribute('data-card') == 'ace'){
		this.innerHTML = "<img src='cards/overwatch_ace.jpg'>";
	}
	if (cardsInPlay.length == 2) {
	    isMatch(cardsInPlay);
	    cardsInPlay = [];
	}
}

function isMatch(cardsInPlay) {
  if (cardsInPlay[0] == cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function reset(){
	
}
createBoard();



// function randomizeNum(){
// 	var rngNumber = Math.floor(Math.random() * 2);
// 	return rngNumber;
// }

// randomizeNum();

// function randomizeCards(rngNumber){
// 	this.king = king ;
// 	this.queen = queen ;
// 	console.log(this.randomizeCards())
// }

// randomizeCards(randomizeNum());

// Sets the top two cards as queens and 
// the bottom two as kings

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if (cardTwo == cardFour){
// 	alert("You found a match!");
// }
// else{
// 	alert("Whoops, those cards don't match! Try again!");
// }


// function isMatch(){

// }

// function isTwoCards(){
// 	cardsInPlay.push(this,getAttribute('data-card'));
// 	if (cardsInPlay.length == 2){
// 		isMatch(cardsInPlay);
// 	}
// }

// for (var i = 0; i < cards.length; i++){
// 	gameCard.setAttribute('data-card', cards[i]);
// 	gameCard.addEventListener('click', isTwoCards);
// }



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
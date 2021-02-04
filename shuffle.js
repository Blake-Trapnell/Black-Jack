let deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]
const half = deck.length / 2;

const wash = () => {
	for (let i = 0; i < 50; i++) {
		let card1 = Math.floor(Math.random() * deck.length);
		let card2 = Math.floor(Math.random() * deck.length);
		let holdCard1 = deck[card1];

		deck[card1] = deck[card2];
		deck[card2] = holdCard1;
	}
};

const riffle = () => {
	const firstHalf = deck.splice(0, half);
	const secondHalf = deck.splice(-half);
	const riffledDeck = [];
	for (let i = 0; i < half; i++) {
		if (Math.random() > 0.5) {
			riffledDeck.push(firstHalf[i]);
			riffledDeck.push(secondHalf[i]);
		} else {
			riffledDeck.push(secondHalf[i]);
			riffledDeck.push(firstHalf[i]);
		}
	}
	deck = riffledDeck;
};

const box = () => {
	let boxedDeck = [];
	for (let i = 0; i < 10; i++) {
		let tempDeck = deck.splice(-Math.floor((deck.length * 1) / 4));
		boxedDeck = boxedDeck.concat(tempDeck);
	}
	deck = boxedDeck.concat(deck);
};

const cut = () => {
	let cutDeck = deck.splice(-half);
	cutDeck = cutDeck.concat(deck);
	deck = cutDeck;
};

const shuffle = () => {
	wash();
	riffle();
	box();
	riffle();
	cut();
};

console.log(deck);
shuffle();
console.log(deck);

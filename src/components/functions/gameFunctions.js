export const score = (hand) => {
	let numberOfAces = 0;
	let score = 0;
	for (let i = 0; i < hand.length; i++) {
		if (hand[i] === "ace") {
			numberOfAces += 1;
		} else {
			score += hand[i];
		}
	}
	while (numberOfAces > 0) {
		if (score + numberOfAces * 11 > 21) {
			score += 1;
		} else score += numberOfAces * 11;
		numberOfAces--;
	}
	return score;
};

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

export const shuffle = () => {
	wash();
	riffle();
	box();
	riffle();
	cut();
};

export const deal = (deck) => {
    return deck.splice(-2)
}

export const hitMe = (deck) => {
  return deck.pop()
}

let exampleHand = ["ace", 10]
let exampleHand2 = ["ace","ace","ace","ace"]
let exampleHand3 = [10, 10, 8]

const score = (hand) => {
    let numberOfAces = 0;
    let score = 0;
  for(let i = 0; i < hand.length; i++) {
    if(hand[i] === "ace") {
      numberOfAces += 1
    }
    else {
      score += hand[i]
    }
  }
    while(numberOfAces > 0) {
      if(score + (numberOfAces * 11) > 21 ) {
        score += 1
      }
      else score += (numberOfAces * 11)
        numberOfAces--
    }
    return score
  };

  console.log(score(exampleHand2))
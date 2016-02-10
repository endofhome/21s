var Game = function() {
  this.deck = [];
  this.players = ['Sam', 'the Dealer'];
};

Game.prototype.createDeck = function() {
  var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'],
      ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  for (i = 0; i<4; i++) {
    for (j = 0; j<13; j++) {
      this.deck.push((ranks[j]) + ' of ' + (suits[i]));
    }
  }
};

Game.prototype.shuffleDeck = function(deckArray) {
  var currentIndex = deckArray.length,
      temporaryValue = 0,
      randomIndex = 0;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deckArray[currentIndex];
    deckArray[currentIndex] = deckArray[randomIndex];
    deckArray[randomIndex] = temporaryValue;
  }
  return deckArray;
};

module.exports = Game;
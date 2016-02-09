var Game = function() {
  this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  this.ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  this.deck = [];
  this.players = ['Sam', 'the Dealer'];
};

Game.prototype.createDeck = function() {
  for (i = 0; i<4; i++) {
    for (j = 0; j<13; j++) {
      this.deck.push((this.ranks[j]) + ' of ' + (this.suits[i]))
    };
  };
};

module.exports = Game;
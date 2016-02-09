var Game = function() {
  this.deck = [];
  this.players = ['Sam', 'the Dealer'];
};

Game.prototype.createDeck = function() {
  var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'],
      ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  for (i = 0; i<4; i++) {
    for (j = 0; j<13; j++) {
      this.deck.push((ranks[j]) + ' of ' + (suits[i]))
    };
  };
};

module.exports = Game;
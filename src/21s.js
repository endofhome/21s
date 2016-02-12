"use strict";

var Game = function(player1, player2) {
  this.deck = [];
  this.players = [player1, player2];
};

Game.prototype.createDeck = function() {
  var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'],
      ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'],
      i = 0,
      j = 0;
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 13; j++) {
      this.deck.push((ranks[j]) + ' of ' + (suits[i]));
    }
  }
};

Game.prototype.shuffleDeck = function() {
  var currentIndex = this.deck.length,
      temporaryValue = 0,
      randomIndex = 0;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this.deck[currentIndex];
    this.deck[currentIndex] = this.deck[randomIndex];
    this.deck[randomIndex] = temporaryValue;
  }
  return this.deck;
};

Game.prototype.dealFirstHand = function() {
  var i;
  for (i = 0; i < 4; i += 2) {
    this.players[0].hand.push(this.deck.shift(i));
    this.players[1].hand.push(this.deck.shift((i + 1)));
  };
};

module.exports = Game;
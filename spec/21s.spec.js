var Game = require('../src/21s.js');

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.createDeck();
  });

  describe('Initialisation', function() {

    it('models a deck of 52 cards', function() {
      expect(game.deck.length).toEqual(52);
    });

    it('there are two players, Sam and the Dealer', function() {
      expect(game.players[0]).toEqual('Sam');
      expect(game.players[1]).toEqual('the Dealer');
    });

  });

  describe("Shuffling the deck", function() {

    beforeEach(function() {
      spyOn(Math, "random").and.returnValue(0.3);
    });

    it("4 of Hearts is on top when Math.random() returns 0.3", function() {
      game.shuffleDeck(game.deck);
      expect(game.deck[0]).toEqual('4 of Hearts');
    });

    it("3 of Diamonds is on the bottom when Math.random() returns 0.3", function() {
      game.shuffleDeck(game.deck);
      expect(game.deck[51]).toEqual('3 of Diamonds');
    });

    it("Ace of Spades is twelfth card in to the stack when Math.random() returns 0.3", function() {
      game.shuffleDeck(game.deck);
      expect(game.deck[11]).toEqual('Ace of Spades');
    });

  });
});
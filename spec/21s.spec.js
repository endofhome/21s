var Game = require('../src/21s.js');

describe('Game', function() {
  var game;

  beforeEach(function() {
    player1 = { name: 'Sam', hand: [] };
    player2 = { name: 'the Dealer', hand: [] };
    game = new Game(player1, player2);
    game.createDeck();
  });

  describe('Initialisation', function() {

    it('models a deck of 52 cards', function() {
      expect(game.deck.length).toEqual(52);
    });

    it('there are two players, Sam and the Dealer', function() {
      expect(game.players[0].name).toEqual('Sam');
      expect(game.players[1].name).toEqual('the Dealer');
    });

  });

  describe('Shuffling and dealing the deck', function() {

    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.3);
    });

    it('4 of Hearts is on top when Math.random() returns 0.3', function() {
      game.shuffleDeck(game.deck);
      expect(game.deck[0]).toEqual('4 of Hearts');
    });

    it('3 of Diamonds is on the bottom when Math.random() returns 0.3', function() {
      game.shuffleDeck(game.deck);
      expect(game.deck[51]).toEqual('3 of Diamonds');
    });

    it('Ace of Spades is twelfth card in to the stack when Math.random() returns 0.3', function() {
      game.shuffleDeck(game.deck);
      expect(game.deck[11]).toEqual('Ace of Spades');
    });

    it('Players are dealt two alternate cards from top of deck', function() {
      game.shuffleDeck(game.deck);
      game.dealFirstHand(game.deck);
      expect(game.players[0].hand[0]).toEqual('4 of Hearts');
      expect(game.players[0].hand[1]).toEqual('Ace of Clubs');
      expect(game.players[1].hand[0]).toEqual('7 of Diamonds');
      expect(game.players[1].hand[1]).toEqual('5 of Spades');      
    }); 

  });
});
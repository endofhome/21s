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
      game.shuffleDeck();
      expect(game.deck[0]).toEqual('4 of Hearts');
    });

    it('3 of Diamonds is on the bottom when Math.random() returns 0.3', function() {
      game.shuffleDeck();
      expect(game.deck[51]).toEqual('3 of Diamonds');
    });

    it('Ace of Spades is twelfth card in to the stack when Math.random() returns 0.3', function() {
      game.shuffleDeck();
      expect(game.deck[11]).toEqual('Ace of Spades');
    });

    it('Players are dealt two alternate cards from top of deck', function() {
      game.shuffleDeck();
      game.dealFirstHand();
      expect(game.players[0].hand[0]).toEqual('4 of Hearts');
      expect(game.players[0].hand[1]).toEqual('Ace of Clubs');
      expect(game.players[1].hand[0]).toEqual('7 of Diamonds');
      expect(game.players[1].hand[1]).toEqual('5 of Spades');      
    }); 

  });


  describe('Calculating the value of cards', function() {
    
    it('a two', function() {
      expect(game.calcCardScore('2 of Hearts')).toEqual(2);
    });

    it('a three', function() {
      expect(game.calcCardScore('3 of Hearts')).toEqual(3);
    });

    it('a four', function() {
      expect(game.calcCardScore('4 of Hearts')).toEqual(4);
    });

    it('a five', function() {
      expect(game.calcCardScore('5 of Hearts')).toEqual(5);
    });
            
    it('a six', function() {
      expect(game.calcCardScore('6 of Hearts')).toEqual(6);
    });

    it('a seven', function() {
      expect(game.calcCardScore('7 of Hearts')).toEqual(7);
    });

    it('an eight', function() {
      expect(game.calcCardScore('8 of Hearts')).toEqual(8);
    });

    it('a nine', function() {
      expect(game.calcCardScore('9 of Hearts')).toEqual(9);
    });

    it('a ten', function() {
      expect(game.calcCardScore('10 of Hearts')).toEqual(10);
    });

    it('a Jack', function() {
      expect(game.calcCardScore('Jack of Spades')).toEqual(10);
    });

    it('a Queen', function() {
      expect(game.calcCardScore('Queen of Spades')).toEqual(10);
    });

    it('a King', function() {
      expect(game.calcCardScore('King of Spades')).toEqual(10);
    });

    it('an Ace', function() {
      expect(game.calcCardScore('Ace of Spades')).toEqual(11);
    });

  });

  describe('Calculating the value of a hand', function() {
      
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.3);
      game.shuffleDeck();
      game.dealFirstHand();
    });

    it('Player 1 first hand (4 of Hearts and Ace of Clubs) is 15', function() {
      expect(game.scoreHand(player1)).toEqual(15);
    });

    it('Player 2 first hand (7 of Diamonds and 5 of Spades) is 12', function() {
      expect(game.scoreHand(player2)).toEqual(12);
    });

  });
});
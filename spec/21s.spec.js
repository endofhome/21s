var Game = require('../src/21s.js');

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('models a deck of 52 cards', function() {
    game.createDeck();
    expect(game.deck.length).toEqual(52);
  });

  it('there are two players, Sam and the Dealer', function() {
    expect(game.players[0]).toEqual('Sam');
    expect(game.players[1]).toEqual('the Dealer');
  });

});


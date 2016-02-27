var Player = require('../src/player.js');

describe('Player', function() {
  var player;

  describe('Initialisation', function() {

    beforeEach(function() {
      player = new Player('Sam');
    });

    it('has a name', function() {
      expect(player.name).toEqual('Sam');
    });

    it('holds a hand of cards', function() {
      player.hand.push('4 of Clubs');
      player.hand.push('9 of Hearts');
      player.hand.push('Ace of Spades');
      expect(player.hand).toEqual(['4 of Clubs', '9 of Hearts', 'Ace of Spades']);
    });
  });
});
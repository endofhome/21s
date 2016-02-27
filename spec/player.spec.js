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
  });
});
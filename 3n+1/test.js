describe('3n+1', function() {

  var lib = require('./index.js'),
      expect = require('chai').expect;

  describe('countCycles', function() {

    it('works', function() {
      var cycles = lib.countCycles(1, 1);
      expect(cycles).to.equal(1);
      
      cycles = lib.countCycles(12, 1);
      expect(cycles).to.equal(10);

      cycles = lib.countCycles(27, 1);
      expect(cycles).to.equal(112);
    });

  });

  describe('main', function() {

    it('works', function() {
      var cycles = lib.main(1, 10);
      expect(cycles).to.equal(20);

      cycles = lib.main(100, 200);
      expect(cycles).to.equal(125);

      cycles = lib.main(201, 210);
      expect(cycles).to.equal(89);

      cycles = lib.main(900, 1000);
      expect(cycles).to.equal(174);
    });

  });

});

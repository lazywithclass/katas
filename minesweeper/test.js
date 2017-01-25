describe('minesweeper', function() {

  var lib = require('./index.js'),
      expect = require('chai').expect,
      fs = require('fs');

  it('works', function() {

    for (let i = 1; i <= 53; i++) {
      let input = fs.readFileSync(`./fixtures/input-${i}`).toString().split('\n'),
          output = fs.readFileSync(`./fixtures/output-${i}`).toString();

      expect(lib(input)).to.equal(output);
    }
  });

});

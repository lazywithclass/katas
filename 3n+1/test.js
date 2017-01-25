describe('3n+1', function() {

  var lib = require('./index.js'),
      expect = require('chai').expect,
      fs = require('fs');

  describe('3n+1', function() {

    it('works', function() {
      let input = fs.readFileSync('./input').toString().split('\n'),
          output = fs.readFileSync('./output').toString().split('\n');

      input.forEach((row, i) => {
        let values = row.split(' ');
        let result = lib(values[0], values[1]);

        let expected = parseInt(output[i].split(' ')[2], 10);
        expect(result).to.equal(expected);
      });
    });

  });

});

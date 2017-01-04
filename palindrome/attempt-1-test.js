describe('palindrome exercise', function() {

  var expect = require('chai').expect;

  describe('isPalindrome', function() {

    var isPalindrome = require('./attempt-1-source').isPalindrome;

    it('exists', function() {
      expect(isPalindrome).to.exist;
    });

    it('returns true for an odd palindrome', function() {
      expect(isPalindrome('tacocat')).to.be.true;
    });

    it('returns true for an even palindrome', function() {
      expect(isPalindrome('1221')).to.be.true;
    });

    // doesnt work for complex cases lol

    // next steps
    // 1) make it work with spaces
    // 2) make it work with punctuation
    // 3) make it work with camel case

    // but probably I must go over it again...

  });

  describe('split', function() {

    var split = require('./attempt-1-source').split;

    it('exists', function() {
      expect(split).to.exist;
    });

    it('splits an odd string in two leaving out the middle', function() {
      var result = split('abc');
      expect(result[0]).to.equal('a');
      expect(result[1]).to.equal('c');
    });

    it('splits an even string in two', function() {
      var result = split('ab');
      expect(result[0]).to.equal('a');
      expect(result[1]).to.equal('b');
    });

    it('works with more complex inputs', function() {
      expect(split('123456')[0]).to.equal('123');
      expect(split('123456')[1]).to.equal('456');

      expect(split('123456789')[0]).to.equal('1234');
      expect(split('123456789')[1]).to.equal('6789');
    });

  });

});

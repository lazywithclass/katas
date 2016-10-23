var isPalindrome = (string) => {
  var parts = split(string);
  return parts[0] === parts[1].split('').reverse().join('');
};

var split = (string) => {
  var length = string.length,
      lengthOver2 = length / 2;

  if (length % 2 === 0) {
    return [
      string.substring(0, lengthOver2),
      string.substring(lengthOver2, length)
    ];
  } else {
    return [
      string.substring(0, Math.floor(lengthOver2)),
      string.substring(Math.ceil(lengthOver2), length)
    ];
  }
};

module.exports = {
  isPalindrome: isPalindrome,
  split: split
};

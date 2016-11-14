// the idea is to have a data structure with of size n
// each element has a portion of the available slots
// based on its weight
// a random function picks a slot, which corresponds to
// and element

// for example given A(1) B(1) C(2)
// the data structure is
// [ A, B, C, C ]

// elements is an array containing an object composed
// like this:
// { key: 'A', weight: 1 }
// as per the example above
function weightedRandom(elements) {
  var weightedArray = [];

  elements.forEach(function(element) {
    for (var i = 0; i < element.weight; i ++) {
      weightedArray.push(element.key);
    }
  });

  var randomPosition = getRandomInt(0, weightedArray.length);
  return weightedArray[randomPosition];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var simple = [{ key: 'A', weight: 1}];
// console.log(weightedRandom(simple));

var equal = [{ key: 'A', weight: 1}, { key: 'B', weight: 1}];
console.log(weightedRandom(equal));

// QUESTIONS:
// 1) How do I test this?
// 2) This is O(n^2), how could this be done in a better way?
// Is it really O(n^2)? It doesn't look like it, I think it's less
// than that, it depends on weight...

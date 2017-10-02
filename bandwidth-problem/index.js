function isASolution(solution, spotsFilled, input) {

}

function processSolution(solution, spotsFilled, input) {

}

function constructCandidates(solution, spotsFilled, input) {

}

function backtrack(solution, spotsFilled, input) {
  if (isASolution(solution, spotsFilled, input)) {
    processSolution(solution, spotsFilled, input);
  } else {
    spotsFilled++;
    constructCandidates(solution, spotsFilled, input).forEach(function(candidate, i) {
      solution[spotsFilled] = candidate;
      backtrack(solution, spotsFilled, input);
    });
  }
}

var fs = require('fs');
function permute(filename) {
  var contents = fs
      .readFileSync(filename, 'utf8')
      .split('\n');

  var vertices = contents.shift(),
      edges = contents.shift();

  if (contents[contents.length - 1] === '') contents.pop();

  

  console.log(contents)
}


permute('./input-files/g-p-5-4');

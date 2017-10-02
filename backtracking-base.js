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

function main(i, j) {
  if (i > j) {
    let tmp = i;
    i = j;
    j = tmp;
  }

  var maxCycles = 0;
  while (i <= j) {
    var cycles = countCycles(i, 1);
    if (cycles > maxCycles) maxCycles = cycles;
    i++;
  }
  return maxCycles;
}

function countCycles(n, count) {
  if (n === 1) return count;
  return n % 2 === 0 ?
    countCycles(n / 2, count + 1) :
    countCycles((n * 3) + 1, count + 1);
}

module.exports = main;

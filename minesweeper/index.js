// need field[x] to protect against undefined
let isBomb = (x, y, field) => field[x] && field[x][y] === '*';

let increase = (x, y, field) => {
  // clockwise check positions for bomb
  // starting from top left (x-1, y+1)

  if (field[x][y] === '.') field[x][y] = 0;

  if (isBomb(x - 1, y + 1, field)) field[x][y] += 1;
  if (isBomb(x, y + 1, field)) field[x][y] += 1;
  if (isBomb(x + 1, y + 1, field)) field[x][y] += 1;

  if (isBomb(x - 1, y, field)) field[x][y] += 1;
  if (isBomb(x + 1, y, field)) field[x][y] += 1;

  if (isBomb(x - 1, y - 1, field)) field[x][y] += 1;
  if (isBomb(x, y - 1, field)) field[x][y] += 1;
  if (isBomb(x + 1, y - 1, field)) field[x][y] += 1;
};

let loop = field => {
  let x, y;
  for (x = 0; x < field.length; x++) {
    for (y = 0; y < field[x].length; y++) {
      increase(x, y, field);
    }
  }
  return field;
};

let print = field => {
  let x, y;
  for (x = 0; x < field.length; x++) {
    for (y = 0; y < field[x].length; y++) {
      process.stdout.write(''+field[x][y]);
    }
    process.stdout.write('\n');
  }
};

var input = [
  [ '*', '.', '.', '.' ],
  [ '.', '.', '.', '.' ],
  [ '.', '*', '.', '.' ],
  [ '.', '.', '.', '.' ]
];

print(loop(input));

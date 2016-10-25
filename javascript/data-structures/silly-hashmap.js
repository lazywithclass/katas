const init = () => {
  return '';
};

const get = (_, key) => {
  return _.split(/@/).find((pair) => {
    return pair.indexOf(key) > -1;
  });
};

const set = (_, key, value) => {
  const index = _.indexOf(key + '":'), keyFound = index > -1;
  if (keyFound) {
    const obj = get(_, key);
    _ = _.replace('@' + obj, '');
    _ = _.concat('@' + obj.replace(/:".*"/, ':"' + value + '"'));
  } else {
    const greatest = _.match(/@/g).reduce((greatest, current) => {
      current = parseInt(current.replace('@', ''), 10);
      return current > greatest ? current : greatest;
    }, 0);
    return _ + '@' + (greatest + 1) + key + ':"' + value;
  }
  return _;
};

const json = (_) => {
  return _
    .replace(/@/g, ',')
    .replace(/,/, '{') // only the first
    + '}';
};


// var normal = {};
// for (let i = 0; i < 10000; i++) {
//   const now = new Date().getTime();
//   normal[now] = now;
// }
// console.time('normal');
// const resultNormal = JSON.stringify(normal);
// console.timeEnd('normal');

// var silly = '';
// for (let i = 0; i < 10000; i++) {
//   const now = new Date().getTime();
//   silly = silly.concat('@' + '"' + now + '":' + '"' + now + '"');
// }
// console.time('silly');
// const resultSilly = json(silly);
// console.timeEnd('silly');

// // silly indeed

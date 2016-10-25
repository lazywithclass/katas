const init = () => {
  return '';
};

const get = (_, key) => {
  const obj = _.split(/,/).find((pair) => {
    return pair.indexOf(key) > -1;
  });
  return obj.replace('{', '');
};

const set = (_, key, value) => {
  const index = _.indexOf(key + '":'), keyFound = index > -1;
  if (keyFound) {
    const obj = get(_, key);
    _ = _
      .replace(obj, '')
      .replace('}', '')
      .replace('{,', '{');
    _ = _.concat(',' + obj.replace(/:".*"/, ':"' + value + '"}'));
  } else {
    return _
      .replace('}', ',')
      .concat('"' + key + '":"' + value + '"}');
  }
  return _;
};

const json = (_) => {
  return _
    .replace(/@/g, ',')
    .replace(/,/, '{') // only the first
    + '}';
};


// console.log(get('{"key":"value","key2":"value2"}', 'key'));
// console.log(set('{"key":"value","key2":"value2"}', 'key3', 'value3'));
console.log(set('{"key":"value","key2":"value2"}', 'key', 'hellow'));


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

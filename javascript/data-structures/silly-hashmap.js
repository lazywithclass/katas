// if the two TODOs prove true then we should
// think about having a side lookup data structure
// the focus is having a set and get faster or comparable
// to hashmap and a json conversion that takes 0

const init = () => {
  return '';
};

const get = (_, key) => {
  // TODO or is it just faster to JSON.parse and
  // get that? lol
  const obj = _.split(/,/).find((pair) => {
    return pair.indexOf(key) > -1;
  });
  return obj.replace('{', '');
};

const set = (_, key, value) => {
  // TODO or is it just faster to JSON.parse and
  // set that? lol
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
  // lol
  return _;
};


// console.log(get('{"key":"value","key2":"value2"}', 'key'));
// console.log(set('{"key":"value","key2":"value2"}', 'key3', 'value3'));
// console.log(set('{"key":"value","key2":"value2"}', 'key', 'hellow'));

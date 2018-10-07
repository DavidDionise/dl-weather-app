const objectToQueryString = (obj) => {
  return Object.keys(obj).reduce((acc, key, idx, keys) => (
    `${acc}${key}=${obj[key]}${idx === keys.length - 1 ? '' : '&'}`
  ), '')
};

export default objectToQueryString;

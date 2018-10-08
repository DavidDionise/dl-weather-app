/**
 * @description - Parses an object into a URL query string
 * @param {Object} obj - The object being parsed
 * @return {String} - The URL query string
 */
const objectToQueryString = (obj) => {
  return Object.keys(obj).reduce((acc, key, idx, keys) => (
    `${acc}${key}=${obj[key]}${idx === keys.length - 1 ? '' : '&'}`
  ), '')
};

export default objectToQueryString;

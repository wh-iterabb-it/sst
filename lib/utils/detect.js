const urlRegex = require('./urlRegex');
const convert = require('./convert');

/**
 * detectURL
 * @param {string} str - a string to check for a url in it
 * @return {boolean}
 */
function detectURL(str) {
  if (str.length < 2083 && (str.match(urlRegex))) {
    const match = str.match(urlRegex);
    return match[0];
  }
  return false;
}

/**
 * isURL
 * @param {string} str - a string to check for a url in it
 * @return {boolean}
**/
function isURL(str) {
  return detectURL(str);
}

/**
   * detectHostName
   * @param {string} url - a url parsed from a message to get a host name from
   * @return {string} a hostname
   */
function detectHostName(url) {
  let hostname;

  // find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf('://') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }

  // find & remove port number
  hostname = hostname.split(':')[0];

  // find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}
/**
 * detectRootDomain
 * @param {string} url - a url parsed from a message to get a host name from
 * @return {string} a domain
 */
function detectRootDomain(url) {
  let domain = detectHostName(url);
  const splitArr = domain.split('.');
  const arrLen = splitArr.length;

  // extracting the root domain here
  // if there is a subdomain
  if (arrLen > 2) {
    domain = `${splitArr[arrLen - 2]}.${splitArr[arrLen - 1]}`;
    // check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
    if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
      // this is using a ccTLD
      domain = `${splitArr[arrLen - 3]}.${domain}`;
    }
  }

  return domain;
}

/**
 * isBoolean
 * typeof check for boolean alias
 * @param {} obj - the object in question
 * @return {boolean} - true if typeof boolean
**/
function isBoolean(obj) {
  return typeof(obj) === 'boolean';
}

/**
 * isFinite
 * method determines whether the passed value is an integer
 * @param {} int - the object in question
 * @return {boolean} -
**/
function isFinite(int) {
  return isInteger(int) && !isNaN(parseFloat(int));
}

/**
 * isInteger
 * method determines whether the passed value is an integer
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {} int - the object in question
 * @return {boolean} - true if integer
**/
function isInteger(int) {
  return Number.isInteger(int);
}


/**
 * isNull
 * method determines whether the passed value is null
 * @param {} int - the object in question
 * @return {boolean} - true if null
**/
function isNull(obj) {
  return obj === null;
}


/**
 * isString
 * method determines whether the passed value is typeof string
 * @param {} str - the object in question
 * @return {boolean} - true if string
**/
function isString(str) {
  return typeof(str) === "string";
}

module.exports = {
  detectURL, detectHostName, detectRootDomain, isBoolean, isFinite, isInteger, isNull, isString
};

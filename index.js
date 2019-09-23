const convert = require('./lib/utils/convert');
const detect = require('./lib/utils/detect');
const format = require('./lib/utils/format');
const fs = require('./lib/utils/fs');
const logger = require('./lib/utils/logger').default;
const sanitize = require('./lib/utils/sanitize');

module.exports = {convert, detect, format, fs, logger, sanitize};

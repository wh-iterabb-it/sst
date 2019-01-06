const { createLogger, transports, format } = require('winston');

const {
  colorize, combine, timestamp, printf,
} = format;

const currentFormat = printf((options) => {
  return `${options.timestamp} ${options.level}: ${options.message}`;
});

const logger = createLogger({
  'level': 'debug',
  format: combine(
    timestamp(),
    colorize(),
    currentFormat,
  ),
  transports: [
    new (transports.Console)(),
  ],
});

module.exports.default = logger;

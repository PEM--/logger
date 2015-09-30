// Expose a creation function
Logger.createLogger = function(
  name,
  level = Logger.LOG_LEVEL,
  stream = Logger.logFormatter
) {
  return bunyan.createLogger({name, stream, level});
};

// Instantiate logger
const log = Logger.createLogger('Logger');

log.info(`Activated in ${Logger.LOG_LEVEL} mode`);

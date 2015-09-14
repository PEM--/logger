bunyan = Npm.require('bunyan');
bunyanFormat = Npm.require('bunyan-format');

// Formatter
Logger.logFormatter = bunyanFormat({outputMode: 'short', color: true});

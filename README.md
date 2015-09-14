# Isomorphic Logger
A logger that works on the client and on the server.

## Installation
```bash
meteor add pierreeric:logger
```
## Commands
### Create your own logger
```js
var log = Logger.createLogger('MyApp');
```

### Create log traces
```js
log.debug('Debug');
log.info('Information');
log.warn('Warning');
log.error('Error');
```

### Remove all logs from Orion
```js
log.level('none');
```

### Set a specific level of logs
```js
// For debug level and aboves
log.level('debug');
...
// For info level and above
log.level('info');
...
// For fatal only level
log.level('fatal');
```

## Links
* Inspired from [Ongoworks's Bunyan](https://github.com/ongoworks/meteor-bunyan)
* [Bunyan](https://github.com/trentm/node-bunyan)
* [Comparison between Winston and Bunyan](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/)
* [Log with style](https://www.npmjs.com/package/log-with-style)

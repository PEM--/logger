Package.describe({
  name: 'pierreeric:logger',
  version: '0.0.3',
  summary: 'Isomorphic logger',
  git: 'https://github.com/PEM--/logger',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // Meteor's API version
  api.versionsFrom('1.2');

  // NPM modules
  Npm.depends({
    'bunyan': '1.5.1',
    'bunyan-format': '0.2.1',
    'stream-browserify': '2.0.1',
    'process': '0.11.2',
    'util': '0.10.3',
    'inherits': '2.0.1',
    'log-with-style': '0.1.5'
  });

  // Dependencies of this package
  // Dependencies for server and client
  var shared = [
    'ecmascript',
    'es5-shim'
  ];
  api.use(shared);
  api.imply(shared);
  // Dependencies for client only
  api.use(['cosmos:browserify@0.7.2'], 'client');
  // Included files in this packages
  // Files for server and client
  api.addFiles('namespace.js');
  // Files for client only
  api.addFiles('logger_client.browserify.js', 'client');
  // Files for server only
  api.addFiles('logger_server.js', 'server');
  // Files for server and client
  var files = ['logger_both_loglevel_debug.js'];
  if (process.env.NODE_ENV === 'production') {
    files = ['logger_both_loglevel_info.js'];
  }
  api.addFiles(files.concat(['logger_both.js']));
  // Export
  api.export(['Logger']);
});

module.exports = function(config) {

  // Output directory
  config.dest = 'www';
  
  // Inject cordova script into html
  config.cordova = false;
  
  // Images minification
  config.minify_images = true;

  // Development web server

  config.server.host = 'localhost';
  config.server.port = '8000';
  
  // Set to false to disable it:
  // config.server = false;

  // Weinre Remote debug server
  
  config.weinre.httpPort = 8001;
  config.weinre.boundHost = 'localhost';

  // Set to false to disable it:
  // config.weinre = false;
    
  // 3rd party components
  // config.vendor.js.push('.bower_components/lib/dist/lib.js');
  // config.vendor.fonts.push('.bower_components/font/dist/*');
  config.vendor.js.push('./bower_components/ng-flow/dist/ng-flow-standalone.js');
  config.vendor.js.push('./bower_components/angular-timer/dist/angular-timer.min.js');
  config.vendor.js.push('./bower_components/humanize-duration/humanize-duration.js');
  config.vendor.js.push('./bower_components/momentjs/moment.js');
  config.vendor.js.push('./bower_components/angular-local-storage/dist/angular-local-storage.min.js');
  config.vendor.js.push('./bower_components/date-polyfill/date-polyfill.min.js');
};
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true,
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'spec/**/*.spec.js'
    ]
  })
}

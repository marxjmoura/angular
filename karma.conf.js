module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true,
    files: [
      'lib/jquery.min.js',
      'lib/angular.min.js',
      'lib/angular-route.min.js',
      'lib/angular-mocks.js',
      'app/access-control/*.js',
      'app/dashboard/*.js',
      'app/main/*.js',
      'app/**/*.js',
      'spec/**/*.spec.js'
    ]
  })
}

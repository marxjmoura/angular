module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    reporters: ["dots"],
    singleRun: true,
    files: [
      'app/lib/jquery.min.js',
      'app/lib/angular.min.js',
      'app/lib/angular-route.min.js',
      'app/modules/access-control/*.js',
      'app/modules/dashboard/*.js',
      'app/modules/main/*.js',
      'app/modules/**/*.js',
      'spec/lib/angular-mocks.js',
      'spec/**/*.spec.js'
    ]
  })
}

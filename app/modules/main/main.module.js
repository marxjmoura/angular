(function() {

  var module = angular.module('main', [
    'ngMaterial',
    'ngRoute',
    'oc.lazyLoad'
  ]);

  module.config([
    '$locationProvider',
    location
  ]);

  module.config([
    '$routeProvider',
    router
  ]);
  
  module.run([
    '$ocLazyLoad',
    '$route',
    modules
  ]);

  function location($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

  function router($routeProvider) {
    $routeProvider.caseInsensitiveMatch = true;
  }

  function modules($ocLazyLoad, $route) {
    $ocLazyLoad.load([
      '/modules/access-control/access-control.module.js',
      '/modules/dashboard/dashboard.module.js'
    ]).then(function() {
      $route.reload();
    });
  }

})();

(function() {

  var module = angular.module('main', ['ngRoute', 'ngMaterial', 'oc.lazyLoad']);

  module.config(location);
  module.config(router);
  module.run(modules);

  location.$inject = ['$locationProvider'];
  router.$inject = ['$routeProvider'];
  modules.$inject = ['$ocLazyLoad', '$route'];

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

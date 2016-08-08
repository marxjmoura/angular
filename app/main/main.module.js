(function() {

  var module = angular.module('main', ['ngRoute', 'ngMaterial', 'oc.lazyLoad']);

  module.config(location);
  module.config(router);
  module.config(stringVersion);
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

  function stringVersion() {
    String.prototype.newVersion = function() {
      return this + '?v=' + new Date().getTime();
    };
  }

  function modules($ocLazyLoad, $route) {
    $ocLazyLoad.load([
      'app/access-control/access-control.module.js'.newVersion(),
      'app/dashboard/dashboard.module.js'.newVersion()
    ]).then(function() {
      $route.reload();
    });
  }

})();

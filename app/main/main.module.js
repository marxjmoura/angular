(function() {

  var module = angular.module('main', ['ngRoute', 'oc.lazyLoad']);

  module.config(location);
  module.run(modules);

  location.$inject = ['$locationProvider'];
  modules.$inject = ['$ocLazyLoad'];

  function location($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

  function modules($ocLazyLoad) {
    $ocLazyLoad.load([
      'app/access-control/access-control.module.js'.newVersion(),
      'app/dashboard/dashboard.module.js'.newVersion()
    ]);
  }

})();

// TODO: Move to a better place
String.prototype.newVersion = function() {
  return this + '?v=' + new Date().getTime();
};

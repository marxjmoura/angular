(function() {

  var module = angular.module('dashboard', [
    'ngRoute'
  ]);

  module.config([
    '$routeProvider',
    routes
  ]);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/modules/dashboard/views/welcome.html',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            '/modules/dashboard/controllers/welcome.controller.js',
            '/modules/dashboard/services/welcome.service.js'
          ]);
        }]
      })
      .when('/guest-list', {
        templateUrl: '/modules/dashboard/views/guest-list.html',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            '/modules/dashboard/controllers/guest-list.controller.js'
          ]);
        }]
      });
  }

})();

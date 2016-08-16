(function() {

  var module = angular.module('dashboard', ['ngRoute']);

  module.config(routes);

  routes.$inject = ['$routeProvider'];

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
      });
  }

})();

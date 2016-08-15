(function() {

  var module = angular.module('dashboard', ['ngRoute']);

  module.config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/dashboard/views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            '/app/dashboard/controllers/home.controller.js',
            '/app/dashboard/services/welcome.service.js'
          ]);
        }]
      });
  }

})();

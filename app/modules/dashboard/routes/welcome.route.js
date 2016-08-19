(function() {

  var module = angular.module('dashboard');

  module.config([
    '$routeProvider',
    routes
  ]);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/modules/dashboard/views/welcome.html',
        controller: 'dashboard.WelcomeController',
        controllerAs: 'welcomeCtrl',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            '/modules/dashboard/controllers/welcome.controller.js',
            '/modules/dashboard/services/welcome.service.js'
          ]);
        }]
      });
  }

})();

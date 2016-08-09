(function() {

  var module = angular.module('dashboard', []);

  module.config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/dashboard/views/home.html'.newVersion(),
        controller: 'homeCtrl',
        controllerAs: 'home',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            '/app/dashboard/controllers/home.controller.js'.newVersion(),
            '/app/dashboard/services/welcome.service.js'.newVersion()
          ]);
        }]
      });
  }

})();

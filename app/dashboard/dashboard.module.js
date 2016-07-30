(function() {

  var module = angular.module('main.dashboard', []);

  module.config(routes);

  function routes($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/dashboard/views/home.html'.newVersion(),
        controller: 'homeCtrl',
        controllerAs: 'home',
        resolve: {
          lazy: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              '/app/dashboard/controllers/home.controller.js'.newVersion(),
              '/app/dashboard/services/welcome.service.js'.newVersion()
            ]);
          }]
        }
      });
  }

})();

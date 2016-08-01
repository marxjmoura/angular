(function() {

  var module = angular.module('dashboard', []);

  module.config(routes);
  module.run(refresh);

  routes.$inject = ['$routeProvider'];
  refresh.$inject = ['$route'];

  function routes($routeProvider) {
    $routeProvider
      .when('/home', {
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

  function refresh($route) {
    $route.reload();
  }

})();

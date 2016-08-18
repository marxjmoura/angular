(function() {

  var module = angular.module('dashboard');

  module.config([
    '$routeProvider',
    routes
  ]);

  function routes($routeProvider) {
    $routeProvider
      .when('/guest-list', {
        templateUrl: '/modules/dashboard/views/guest-list.html',
        controller: 'dashboard.GuestListCtrl',
        controllerAs: 'guestListCtrl',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            '/modules/dashboard/controllers/guest-list.controller.js'
          ]);
        }]
      });
  }

})();

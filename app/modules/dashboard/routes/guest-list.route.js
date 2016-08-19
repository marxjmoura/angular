(function() {

  var module = angular.module('dashboard');

  module.config([
    '$routeProvider',
    guestListRoute
  ]);

  function guestListRoute($routeProvider) {
    $routeProvider
      .when('/guest-list', {
        templateUrl: '/modules/dashboard/views/guest-list.html',
        controller: 'dashboard.GuestListController',
        controllerAs: 'guestListCtrl',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            '/modules/dashboard/controllers/guest-list.controller.js'
          ]);
        }]
      });
  }

})();

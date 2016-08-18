(function() {

  var module = angular.module('dashboard', [
    'ngRoute'
  ]);

  module.run([
    '$ocLazyLoad',
    '$route',
    init
  ]);

  function init($ocLazyLoad, $route) {
    $ocLazyLoad.load([
      '/modules/dashboard/routes/guest-list.route.js',
      '/modules/dashboard/routes/welcome.route.js'
    ]).then(function() {
      $route.reload();
    });
  }

})();

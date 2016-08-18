(function() {

  var module = angular.module('accessControl', [
    'oc.lazyLoad'
  ]);

  module.run([
    '$ocLazyLoad',
    init
  ]);

  function init($ocLazyLoad, $route) {
    $ocLazyLoad.load([
      '/modules/access-control/services/user.service.js'
    ]);
  }

})();

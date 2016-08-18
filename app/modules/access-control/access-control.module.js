(function() {

  var module = angular.module('accessControl', [
    'oc.lazyLoad'
  ]);

  module.run([
    '$ocLazyLoad',
    defaults
  ]);

  function defaults($ocLazyLoad, $route) {
    $ocLazyLoad.load([
      '/modules/access-control/services/user.service.js'
    ]);
  }

})();

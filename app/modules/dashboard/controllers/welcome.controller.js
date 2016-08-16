(function() {

  angular.module('dashboard').controller('WelcomeCtrl', [
    '$location',
    'welcome',
    WelcomeCtrl
  ]);

  function WelcomeCtrl ($location, welcome)  {
    var _self = this;

    _self.getMessage = function() {
      return welcome.getMessage('Marx');
    }

    _self.newUser = function() {
      $location.path('/guest-list');
    };
  }

})();

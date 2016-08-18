(function() {

  angular.module('dashboard').controller('dashboard.WelcomeCtrl', [
    '$location',
    'accessControl.User',
    WelcomeCtrl
  ]);

  function WelcomeCtrl ($location, user)  {
    var _self = this;

    _self.init = function() {
      if (user.current()) {
        $location.path('/guest-list');
      }
    }

    _self.createUser = function() {
      user.save(_self.user);
      $location.path('/guest-list');
    };
  }

})();

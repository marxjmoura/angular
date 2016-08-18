(function() {

  angular.module('dashboard').controller('dashboard.WelcomeCtrl', [
    '$location',
    'accessControl.User',
    WelcomeCtrl
  ]);

  function WelcomeCtrl ($location, user)  {
    var _self = this;

    function goToGueslist() {
      $location.path('/guest-list');
    }

    _self.createUser = function() {
      user.save(_self.user);
      goToGueslist();
    };

    if (user.isKnown()) goToGueslist();
  }

})();

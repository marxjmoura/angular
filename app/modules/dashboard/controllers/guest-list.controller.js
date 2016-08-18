(function() {

  angular.module('dashboard').controller('dashboard.GuestListCtrl', [
    '$location',
    'accessControl.User',
    GuestListCtrl
  ]);

  function GuestListCtrl ($location, user)  {
    var _self = this;

    _self.owner = user.current();

    function goToWelcomePage() {
      $location.path('/');
    }

    if (user.isUnknown()) goToWelcomePage();
  }

})();

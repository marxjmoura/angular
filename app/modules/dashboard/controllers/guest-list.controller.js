(function() {

  angular.module('dashboard').controller('dashboard.GuestListController', [
    '$location',
    'accessControl.User',
    GuestListController
  ]);

  function GuestListController ($location, user)  {
    var _self = this;

    _self.owner = user.current();

    function goToWelcomePage() {
      $location.path('/');
    }

    if (user.isUnknown()) goToWelcomePage();
  }

})();

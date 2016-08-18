(function() {

  angular.module('dashboard').controller('dashboard.GuestListCtrl', [
    'accessControl.User',
    GuestListCtrl
  ]);

  function GuestListCtrl (user)  {
    var _self = this;

    _self.owner = user.current();
  }

})();

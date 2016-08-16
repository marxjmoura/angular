(function() {

  angular.module('dashboard').controller('WelcomeCtrl', WelcomeCtrl);

  WelcomeCtrl.$inject = ['welcome'];

  function WelcomeCtrl (welcome)  {
    var _self = this;

    _self.getMessage = function() {
      return welcome.getMessage('Marx');
    }
  }

})();

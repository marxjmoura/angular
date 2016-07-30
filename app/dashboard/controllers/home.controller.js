(function() {

  angular.module('main.dashboard').controller('homeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['welcome'];

  function HomeCtrl (welcome)  {
    var _self = this;

    _self.getMessage = function() {
      return welcome.getMessage('Marx');
    }
  }

})();

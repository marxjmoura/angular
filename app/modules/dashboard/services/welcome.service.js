(function() {

  angular.module('dashboard').service('dashboard.Welcome', [
    Welcome
  ]);

  function Welcome ()  {
    var _self = this;

    _self.getMessage = function(name) {
      return 'Welcome home ' + (name || '') + '!';
    }
  }

})();

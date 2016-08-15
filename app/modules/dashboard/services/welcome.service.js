(function() {

  angular.module('dashboard').service('welcome', Welcome);

  function Welcome ()  {
    var _self = this;

    _self.getMessage = function(name) {
      return 'Welcome home ' + (name || '') + '!';
    }
  }

})();

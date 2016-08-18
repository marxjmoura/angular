(function() {

  angular.module('accessControl').service('accessControl.User', [
    UserService
  ]);

  function UserService($cacheFactory) {
    var _self = this;

    _self.isKnown = function() {
      return Boolean(_self.current());
    };

    _self.isUnknown = function() {
      return !_self.isKnown();
    };

    _self.current = function() {
      return JSON.parse(localStorage.getItem('user'));
    }

    _self.save = function(user) {
      localStorage.setItem('user', JSON.stringify(user));
    };
  }

})();

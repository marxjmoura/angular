(function (factory) {

  factory.newUser = function() {
    return {
      name: "New user name"
    };
  };

})(window.factory || (window.factory = {}));

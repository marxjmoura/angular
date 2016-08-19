(function (factory) {

  factory.user = function() {
    return {
      name: "New user name"
    };
  };

})(window.factory || (window.factory = {}));

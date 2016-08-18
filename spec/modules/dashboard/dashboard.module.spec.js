describe('dashboard module', function() {
  beforeEach(module('dashboard'));

  describe('$route', function() {
    var $route;

    beforeEach(inject(function($injector) {
      $route = $injector.get('$route');
    }));

    it("should map '/' to welcome page", function() {
      expect($route.routes['/'].templateUrl).toEqual('/modules/dashboard/views/welcome.html');
    });
  });
});

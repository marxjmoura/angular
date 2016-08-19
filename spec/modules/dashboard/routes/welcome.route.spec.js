describe('welcome.route', function() {
  var $route;

  beforeEach(module('dashboard'));

  beforeEach(inject(function($injector) {
    $route = $injector.get('$route');
  }));

  describe('/', function() {
    it("should map to welcome page", function() {
      expect($route.routes['/'].templateUrl).toEqual('/modules/dashboard/views/welcome.html');
      expect($route.routes['/'].controller).toEqual('dashboard.WelcomeController');
      expect($route.routes['/'].controllerAs).toEqual('welcomeCtrl');
    });
  });
});

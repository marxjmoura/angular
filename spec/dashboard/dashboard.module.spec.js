describe('dashboard module', function() {
  beforeEach(module('dashboard'));

  it('should map home route', function() {
    inject(function($route) {
      expect($route.routes['/'].controller).toBe('HomeCtrl');
      expect($route.routes['/'].controllerAs).toBe('home');
      expect($route.routes['/'].templateUrl).toEqual('app/dashboard/views/home.html');
    });
  });
});

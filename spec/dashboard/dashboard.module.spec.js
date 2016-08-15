describe('dashboard module', function() {
  var $route;

  beforeEach(module('dashboard'));
  beforeEach(inject(function($injector) {
    $route = $injector.get('$route');
  }));

  it('should map home route', function() {
    expect($route.routes['/'].controller).toBe('HomeCtrl');
    expect($route.routes['/'].controllerAs).toBe('home');
    expect($route.routes['/'].templateUrl).toEqual('app/dashboard/views/home.html');
  });
});

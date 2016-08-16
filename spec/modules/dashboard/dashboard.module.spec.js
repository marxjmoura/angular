describe('dashboard module', function() {
  var $route;

  beforeEach(module('dashboard'));
  beforeEach(inject(function($injector) {
    $route = $injector.get('$route');
  }));

  it('should map routes', function() {
    expect($route.routes['/'].templateUrl).toEqual('/modules/dashboard/views/welcome.html');
  });
});

describe('guest-list.route', function() {
  var $route;

  beforeEach(module('dashboard'));

  beforeEach(inject(function($injector) {
    $route = $injector.get('$route');
  }));

  describe('/guest-list', function() {
    it("should map to guest list page", function() {
      expect($route.routes['/guest-list'].templateUrl).toEqual('/modules/dashboard/views/guest-list.html');
      expect($route.routes['/guest-list'].controller).toEqual('dashboard.GuestListCtrl');
      expect($route.routes['/guest-list'].controllerAs).toEqual('guestListCtrl');
    });
  });
});

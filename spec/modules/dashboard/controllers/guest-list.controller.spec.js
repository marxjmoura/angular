describe('dashboard.GuestListController', function() {
  beforeEach(module('dashboard'));
  beforeEach(module('accessControl'));

  describe('when user is unknown', function() {
    beforeEach(inject(function($rootScope, $controller, $location) {
      var guestListController = $controller('dashboard.GuestListController', {
        scope: $rootScope.$new()
      });
    }));

    it('should redirect to welcome page', function() {
      // TODO
    });
  });
});

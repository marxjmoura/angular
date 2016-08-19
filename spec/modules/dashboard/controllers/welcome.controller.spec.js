describe('dashboard.WelcomeController', function() {
  beforeEach(module('dashboard'));
  beforeEach(module('accessControl'));

  describe('when user is known', function() {
    beforeEach(inject(function($rootScope, $controller, $location) {
      var welcomeController = $controller('dashboard.WelcomeController', {
        scope: $rootScope.$new()
      });
    }));

    it('should redirect to guest list page', function() {
      // TODO
    });
  });
});

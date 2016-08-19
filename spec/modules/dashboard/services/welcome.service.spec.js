describe('dashboard.Welcome', function() {
  beforeEach(module('dashboard'));

  describe('getMessage()', function() {
    var welcomeService;

    beforeEach(inject(function($injector) {
      welcomeService = $injector.get('dashboard.Welcome');
    }));

    describe('when name is supplied', function() {
      it('should include name in welcome message', function() {
        expect(welcomeService.getMessage('GUEST NAME')).toEqual('Welcome home GUEST NAME!');
      });
    });

    describe('when name is not supplied', function() {
      it('should return welcome message without a name', function() {
        expect(welcomeService.getMessage(null)).toEqual('Welcome home !');
      });
    });
  });
});

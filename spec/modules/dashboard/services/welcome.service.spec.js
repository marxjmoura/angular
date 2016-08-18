describe('dashboard.Welcome', function() {
  beforeEach(module('dashboard'));

  describe('getMessage()', function() {
    var welcomeService;

    beforeEach(inject(function($injector) {
      welcomeService = $injector.get('dashboard.Welcome');
    }));

    it('should include name in welcome message when it is supplied', function() {
      expect(welcomeService.getMessage('GUEST NAME')).toEqual('Welcome home GUEST NAME!');
    });

    it('should return welcome message without a name when it is not supplied', function() {
      expect(welcomeService.getMessage(null)).toEqual('Welcome home !');
    });
  });
});

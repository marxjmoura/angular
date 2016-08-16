describe('dashboard module', function() {
  var welcomeService;

  beforeEach(module('dashboard'));
  beforeEach(inject(function($injector) {
    welcomeService = $injector.get('welcome');
  }));

  it('should include name in welcome message when it is supplied', function() {
    expect(welcomeService.getMessage('GUEST NAME')).toEqual('Welcome home GUEST NAME!');
  });

  it('should return welcome message without a name when it is not supplied', function() {
    expect(welcomeService.getMessage(null)).toEqual('Welcome home !');
  });
});

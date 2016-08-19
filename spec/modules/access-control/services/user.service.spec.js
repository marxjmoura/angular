describe('accessControl.User', function() {
  var userService;

  beforeEach(module('accessControl'));

  beforeEach(inject(function($injector) {
    userService = $injector.get('accessControl.User');
  }));

  describe('save()', function() {
    it('should save user in local storage', function() {
      var user = { name: 'New user name' };
      userService.save(user);
      expect(localStorage.getItem('user')).toEqual(JSON.stringify(user));
    });
  });

  describe('current()', function() {
    it('should return user saved in local storage', function() {
      var user = { name: 'New user name' };
      localStorage.setItem('user', JSON.stringify(user));
      expect(userService.current()).toEqual(user);
    });
  });
});

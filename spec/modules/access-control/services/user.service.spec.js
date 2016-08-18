describe('accessControl.User', function() {
  beforeEach(function() {
    module('accessControl');

    module(function($provide) {
      $provide.value('$ocLazyLoad', { load: angular.noop });
    });
  });

  describe('save()', function() {
    var userService;

    beforeEach(inject(function($injector) {
      userService = $injector.get('accessControl.User');
    }));

    it('should save user in local storage', function() {
      var user = { name: 'New user name' };
      userService.save(user);
      expect(localStorage.getItem('user')).toEqual(JSON.stringify(user));
    });
  });

  describe('current()', function() {
    var userService;

    beforeEach(inject(function($injector) {
      userService = $injector.get('accessControl.User');
    }));

    it('should return user saved in local storage', function() {
      var user = { name: 'New user name' };
      localStorage.setItem('user', JSON.stringify(user));
      expect(userService.current()).toEqual(user);
    });
  });
});

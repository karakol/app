'use strict';

describe('myApp.uc module', function() {

  beforeEach(module('myApp.uc'));

  describe('uc controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('UcCtrl');
      expect(ucCtrl).toBeDefined();
    }));

  });
});
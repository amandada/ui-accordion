'use strict';

describe('Directive: ngAccordion', function () {

  // load the directive's module
  beforeEach(module('uiAccordion'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-accordion></ng-accordion>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngAccordion directive');
  }));
});

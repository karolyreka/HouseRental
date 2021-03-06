'use strict';

angular
  .module('houseRental')
  .directive('validateEquals', validateEquals);


/** @ngInject */
function validateEquals() {
    return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
      function validateEqual(value) {
        var valid = (value === scope.$eval(attrs.validateEquals));
        ngModelCtrl.$setValidity('register', valid);
        return valid ? value : undefined;
      }
      ngModelCtrl.$parsers.push(validateEqual);
      ngModelCtrl.$formatters.push(validateEqual);
    
      scope.$watch(attrs.validateEquals, function () {
          ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
      });

   
    }
  };
}

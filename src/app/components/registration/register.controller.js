'use strict';
angular.module('houseRental')
  .controller('RegisterController', RegisterController);

  /** @ngInject */

  function RegisterController($scope, alert, auth) {
      var vm = this;

      vm.passwordConfirmCheck = function () {
          console.log("ng-change");
      };
    vm.submit = function () {
    
    auth.register($scope.email, $scope.password)
      .success(function(res){
        alert('sucess', 'Account created!', 'Welcome, ' + res.user.email +'!');
      })
      .error(function(err){
            alert('warning', 'Something went wrong: (', err.message);
      });
    }
  }

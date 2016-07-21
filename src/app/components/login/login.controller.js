'use strict';
angular.module('houseRental')
  .controller('LoginController', LoginController);

  /** @ngInject */

  function LoginController($scope, alert, auth) {
    var vm = this;
    vm.submit = function() {
      auth.login($scope.email, $scope.password)
      .success(function(res){
        alert('sucess', 'Welcom', 'Thanks for comming back' + res.user.email + '!');
      })
      .error(function(err){
          alert('warning', 'Something went wrong: (', err.message);
      });
    }
  }

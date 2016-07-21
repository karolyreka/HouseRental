'use strict';
angular.module('houseRental')
  .controller('LogoutController', LogoutController);

/** @ngInject */

function LogoutController(authToken, $state) {
  authToken.removeToken();
  $state.go('home', {}, {reload: true});
}

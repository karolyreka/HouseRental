'use strict';

angular
  .module('houseRental')
  .service('auth', auth);

/** @ngInject */
function auth($http, authToken, $state) {
  function authSucessfull(res) {
    authToken.setToken(res.token);
    $state.go('home');
  }
  var url = "http://localhost:9010/login";
  this.login = function(email, password) {
    return $http.post(url, {
      email: email,
      password: password
    }).success(authSucessfull);
  }
  this.register = function(email, password) {
    return $http.post("http://localhost:9010/register", {
      email: email,
      password: password
    }).success(authSucessfull);


  }
}

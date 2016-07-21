'use strict';

angular
  .module('houseRental')
  .factory('authToken', authToken);


/** @ngInject */
function authToken($window) {
  var storage = $window.localStorage;
  var cachedToken;
  var userToken = 'userToken';
  var authToken= {
      /** @ngInject */
    setToken: function(token) {
      cachedToken = token;
      storage.setItem(userToken, token);
    },
      /** @ngInject */
    getToken: function(){
      if(!cachedToken){
        cachedToken = storage.getItem(userToken);
        return cachedToken;
      }
    },
      /** @ngInject */
    isAuthenticated: function(){
      return !!authToken.getToken();
    },
      /** @ngInject */
    removeToken: function(){
      cachedToken = null;
      storage.removeItem(userToken);
    }
  };
  return authToken;
}

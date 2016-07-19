(function() {
  'use strict';

  angular
      .module('houseRental')
      .service('apartment', apartment);

  /** @ngInject */
  function apartment($http, $log) {
    var apiHost = 'http://localhost:9010/api';

    this.getApartments = getApartments;

    function getApartments() {
      return $http.get(apiHost + '/apartment')
        .then(getApartmentsComplete)
        .catch(getApartmentsFailed);

      function getApartmentsComplete(response) {
        return response.data;
      }

      function getApartmentsFailed(error) {
        $log.error('XHR Failed for getApartments.\n' + angular.toJson(error.data, true));
      }
    }
  }

})();
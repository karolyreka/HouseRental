(function() {
    'use strict';

    angular
        .module('houseRental')
        .service('partner', partner);

    /** @ngInject */
    function partner($http, $log) {
        var apiHost = 'http://localhost:9010/api';

        this.getPartners = getPartners;

        function getPartners() {
            return $http.get(apiHost + '/partner')
              .then(getPartnersComplete)
              .catch(getPartnersFailed);

            function getPartnersComplete(response) {
                return response.data;
            }

            function getPartnersFailed(error) {
                $log.error('XHR Failed for getPartners.\n' + angular.toJson(error.data, true));
            }
        }
    }
})();
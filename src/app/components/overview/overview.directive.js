(function() {
  'use strict';

  angular
    .module('houseRental')
    .directive('overview', overview);

  /** @ngInject */
  function overview() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/overview/overview.html',
      controller: OverviewController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function OverviewController(apartment) {
      var vm = this;

      vm.apartments = apartment.getApartments();
    }
  }

})();
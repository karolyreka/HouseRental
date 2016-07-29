(function () {
    'use strict';

    angular
      .module('houseRental')
      .directive('carousel', carousel);

    /** @ngInject */
    function carousel() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/carousel/carousel.html',
            controller: CarouselController,
            controllerAs: 'p',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function CarouselController(partner) {
            var p = this;
            partner.getPartners().then(function (data) {
            p.partners = data;
            });
        }
    }

})();
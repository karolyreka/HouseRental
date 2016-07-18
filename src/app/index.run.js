(function() {
  'use strict';

  angular
    .module('houseRental')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

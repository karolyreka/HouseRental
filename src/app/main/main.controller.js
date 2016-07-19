(function() {
  'use strict';

  angular
    .module('houseRental')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.classAnimation = '';
    vm.creationDate = 1468826377085;
    vm.showToastr = showToastr;
    vm.apartments = [{
      id: '1',
      name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
      image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
      price: '200€ pe luna - Apartamente',
      description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
    }];

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 5000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
  }
})();

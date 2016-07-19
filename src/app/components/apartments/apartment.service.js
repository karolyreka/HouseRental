(function() {
  'use strict';

  angular
      .module('houseRental')
      .service('apartment', apartment);

  /** @ngInject */
  function apartment() {
    var data = [{
      id: '1',
      name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
      image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
      price: '200€ pe luna - Apartamente',
      description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
    },
    {
      id: '2',
      name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
      image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
      price: '200€ pe luna - Apartamente',
      description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
    },
    {
      id: '3',
      name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
      image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
      price: '200€ pe luna - Apartamente',
      description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
    },
    {
      id: '4',
      name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
      image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
      price: '200€ pe luna - Apartamente',
      description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
    },
    {
      id: '5',
      name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
      image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
      price: '200€ pe luna - Apartamente',
      description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
    },
    {
      id: '6',
      name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
      image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
      price: '200€ pe luna - Apartamente',
      description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
    },
    {
      id: '7',
      name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
      image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
      price: '200€ pe luna - Apartamente',
      description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
    }];

    this.getApartments = getApartments;

    function getApartments() {
      return data;
    }
  }

})();
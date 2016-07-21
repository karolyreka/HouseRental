'use strict';
var fs = require('fs');

var apartmentController = function() {
  // var get = function(req, res) {
  //       var data = [{
  //         id: '1',
  //         name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
  //         image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
  //         price: '200€ pe luna - Apartamente',
  //         description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
  //       }, {
  //         id: '2',
  //         name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
  //         image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
  //         price: '200€ pe luna - Apartamente',
  //         description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
  //       }, {
  //         id: '3',
  //         name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
  //         image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
  //         price: '200€ pe luna - Apartamente',
  //         description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
  //       },
  //       {
  //         id: '4',
  //         name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
  //         image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
  //         price: '200€ pe luna - Apartamente',
  //         description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
  //       },
  //       {
  //         id: '5',
  //         name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
  //         image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
  //         price: '200€ pe luna - Apartamente',
  //         description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
  //       },
  //       {
  //         id: '6',
  //         name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
  //         image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
  //         price: '200€ pe luna - Apartamente',
  //         description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
  //       },
  //       {
  //         id: '7',
  //         name: 'Apartament 2 Camere De Inchiriat Str Ion Mihut Unirii',
  //         image: 'http://privatestate.ro/wp-content/uploads/2016/07/13644048_10208457827954720_817498794_n-244x163.jpg',
  //         price: '200€ pe luna - Apartamente',
  //         description: 'Apartament 2 Camere de Inchiriat str Ion Mihut Unirii Apartamentul decomandat oferit…'
  //       }];

  //       res.send(JSON.stringify(data));
  // };

  var get = function(req, res) {
    var path = 'data/apartment/';

    var files = [];
    try {
        files = fs.readdirSync(path);
    }
    catch (e) {
        console.log(e)
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
  };

  return {
    get: get
  };
};

module.exports = apartmentController;
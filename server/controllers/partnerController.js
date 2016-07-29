'use strict';
var fs = require('fs');

var partnerController = function () {
    var get = function (req, res) {
        var path = 'data/partner/';
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

module.exports = partnerController;
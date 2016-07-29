var express = require('express');

var routes = function () {
    var partnerRouter = express.Router();

    var partnerController = require('../controllers/partnerController')();
    partnerRouter.route('/')
    	.get(partnerController.get);

    return partnerRouter;
};

module.exports = routes;
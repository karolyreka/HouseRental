var express = require('express');

var routes = function() {
	var apartmentRouter = express.Router();

	var apartmentController = require('../controllers/apartmentController')();
	apartmentRouter.route('/')
    	.get(apartmentController.get);

	return apartmentRouter;
};

module.exports = routes;
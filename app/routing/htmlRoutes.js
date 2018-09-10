var path = require("path");

module.exports = (function() {
    'use strict';

    var externalRoutes = require('express').Router();

	externalRoutes.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	externalRoutes.get("/index", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	
	externalRoutes.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	
    return externalRoutes;
})();
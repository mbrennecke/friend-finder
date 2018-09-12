var path = require("path");
var bodyParser = require("body-parser");



module.exports = (function() {
	
    'use strict';
	
	var apiRoutes = require('express').Router();
	
	apiRoutes.use(bodyParser.urlencoded({ extended: true }));
	apiRoutes.use(bodyParser.json());
	
	apiRoutes.get("/api/friends", function(req, res) {
	  return res.json(friendList);
	});
	var friendList = require("../data/friends");
	apiRoutes.post("/api/friends", function(req,res){
		var newFriend = req.body;
		return friendList.push(newFriend);
	});
	
	return apiRoutes;
})();
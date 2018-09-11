var path = require("path");
var bodyParser = require("body-parser");

var friendList = require("../data/friends.js");

module.exports = (function() {
    'use strict';
	
	var apiRoutes = require('express').Router();
	
	apiRoutes.use(bodyParser.urlencoded({ extended: true }));
	apiRoutes.use(bodyParser.json());
	
	apiRoutes.get("/api/friends", function(req, res) {
	  return res.json(friendList);
	});
	
	apiRoutes.post("/api/friends", function(req,res){
		var newFriend = req.body;
		friendList.push(newFriend);
		return console.log(newFriend);
	});
	
	return apiRoutes;
})();
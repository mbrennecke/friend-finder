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
		var match;
		var lowestSum = 50;
		for (var i=0;i<friendList.length;i++){
			var sum = 0;
			for (var j=0;j<newFriend.surveyResults.length; j++){
				sum += Math.abs(newFriend.surveyResults[j] - friendList[i].surveyResults[j]);
			}
			if (sum < lowestSum){
				lowestSum = sum;
				match = friendList[i];
			}
		}
		console.log(match);
		friendList.push(newFriend);
		res.send(match);
	});
	
	return apiRoutes;
})();
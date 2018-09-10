var express = require("express");
var path = require("path");

var app = express();


app.use(express.static(path.join(__dirname, '/app/public/')));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

module.exports = myRoute;
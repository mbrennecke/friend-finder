var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/app/public/')));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});




// Starts the server to begin listening
// ========================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
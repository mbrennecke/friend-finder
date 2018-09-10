var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var externalRoutes = require("./app/routing/htmlRoutes");
app.use('/', externalRoutes);





app.use(express.static(path.join(__dirname, '/app/public/')));



// Starts the server to begin listening
// ========================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
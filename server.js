
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var externalRoutes = require("./app/routing/htmlRoutes.js");
app.use('/externalRoutes', externalRoutes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// Starts the server to begin listening
// ========================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
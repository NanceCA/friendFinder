//------DOCUMENT START HERE -------//
//requiring npm express node package
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//the dot means look next to me on the same folder 
require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

//import the files that need this set up code

// set the port of the application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//express app to handle the data parsing
//this is an example of middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
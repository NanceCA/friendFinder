//linking this route to a data source
//data source holds arrays of information the friends that have submitted their 
var bodyParser = require("body-parser");
var friends = require("../app/data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        //friends is an array of all the people and their survey results/ information
        res.json(friends);
    })

    app.post("/api/friends", function (data, res) {
        //send this to app/data/friends.js to save as an array of objects
        //push into the array friends 
        console.log("Did we get here?")
        console.log("The req.body is", data.body);
        friends.push(data.body);
        console.log(friends);
    });

}
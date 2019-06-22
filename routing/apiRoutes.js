//linking this route to a data source
//data source holds arrays of information the friends that have submitted their 
var bodyParser = require("body-parser");
var friends = require("../app/data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        //friends is an array of all the people and their survey results/ information
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        //send this to app/data/friends.js to save as an array of objects
        //push into the array friends 
        console.log("Did we get here?")
        console.log("The req.body is", req.body);
        friends.push(req.body);
        console.log("Console logging", friends);
        res.json(friends)

        //loop through the list to find a compatible friend

        // var totalScore = 0;
        // for (var i = 0; i < friends.length; i++) {

        //     for (var j = 1; j < friends.length; j++) {

        //         totalScore = [friends[i].question1 - friends[j].question1];
        //         if (totalScore === 0) {
        //             alert(friends[i].name, "is your most compatible friend!");
        //         }

        //     }
        // }
    });

}
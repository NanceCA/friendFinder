//linking this route to a data source
//data source holds arrays of information the friends that have submitted their 
var bodyParser = require("body-parser");
var friends = require("../app/data/friends.js");
var path = require("path");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        //friends is an array of all the people and their survey results/ information
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        //send this to app/data/friends.js to save as an array of objects
        var newFriend = (req.body);
        //determining the final score of the user

        // //declaring function for reduce method
        // var adder = (accumulator, currentValue) => {
        //     return accumulator + currentValue;
        // }

        //first for loop here
        var compatability = [];
        for (var i = 0; i < friends.length; i++) {
            //empty array to capture absolute value difference
            var differences = [];
            //empty array to capture compatability scores


            console.log("Comparing ", newFriend.name, "and ", friends[i].name);

            //nested for loop to calculate scores
            for (var j = 0; j < friends[i].scores.length; j++) {
                var diff = Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriend.scores[j]));
                differences.push(diff);
            }

            console.log("The absolute value array for ", newFriend.name, "and ", friends[i].name, differences);
            reducedscore = differences.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            console.log("reduced score", reducedscore);
            compatability.push(reducedscore);
            // var reducedscore = 0;
            // for (var k = 0; k < differences.length; k++) {
            //     reducedscore += parseInt(differences[k]);
            // }

            console.log("The reduced score for ", friends[i].name, "and ", newFriend.name, "is ", reducedscore);
        }

        console.log("Compatability array ", compatability);

        var compatible = Math.min.apply(null, compatability);
        console.log("minimum of the array is ", compatible);
        var match = compatability.indexOf(compatible);

        //COMPATABILITY SUCCESS!
        console.log("You are most compatible with ", friends[match].name);
        console.log(friends[match]);

        //push into the array friends
        friends.push(newFriend);
        res.json(friends[match]);

    });

}
var path = require("path");
module.exports = function (app) {

    app.get("/", function (req, res) {
        //not using handlebars, we can just pass in the .html file?
        //we have a leading / because we are joining the directory name 

        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        //not using handlebars, we can just pass in the .html file?
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // in the same root path, post data received when the submit button is hit
    //in the app.post call, declalre the root path to listen for, then establish the call back function which is the entire logic that is going to execute after there is a post at that root path

}

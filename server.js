var express = require("express");
var app = express();
var path = require('path');

//return the index file when requested
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

//return all other files when requested using the given path
app.get("*", function (req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, req["params"]["0"]));
});


//start the server
var server = app.listen(8080, function() {
    console.log("Running on port 8080");
});
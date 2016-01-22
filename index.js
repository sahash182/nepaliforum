//requirements
var express = require('express'),
	mongoose = require('mongoose'),
  	db = require('./models'),
	path = require("path");
var	app = express(),
	views = path.join(__dirname, "views");

// assets
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.get("/", function(req, res){
	var homePath = path.join(views, "index.html");
	res.sendFile(homePath);
});
app.get("/classifieds", function(req,res){
	var classifiedPath = path.join(views, "classified.html");
	res.sendFile(classifiedPath);
})


//start the server
app.listen(3000, function() {
	console.log("listening to port 3000");
});
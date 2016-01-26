//requirements
var express = require('express'),
		mongoose = require('mongoose'),
		db = require('./models'),
		path = require("path"),
		bodyParser = require("body-parser"),
		_ = require("underscore"),
		app = express();
// views = path.join(__dirname, "views");

//User model defined.
var User = require('./models/user');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// assets
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

// //serving index.html HomePage
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//serving signup form
app.get('/signup', function(req, res) {
  res.sendFile(__dirname + "/views/signup.html");
});

//serving login form
app.get('/login', function(req, res) {
  res.sendFile(__dirname + "/views/login.html");
});

///////////////////////////ROUTES/////////////////////////////////////
// AUTH ROUTES (SIGN UP, LOG IN, LOG OUT)

// create new user with secure password
app.post('/signup', function (req, res) {
   var newUser = new User({
   	 // console.log(req.body);
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
   });

   User.createSecure(newUser, function (err, user) {
     // log in user immediately when created
      // req.login(user);
      console.log(user);
      res.send(user);
      res.redirect('/');
    // log in user immediately when created
  });
});

//start the server
app.listen(3000, function() {
	console.log("listening to port 3000");
});
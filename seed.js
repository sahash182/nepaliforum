var db = require("./models");

db.Book.create({name:"shiva", email:"shiva@gmail.com"}, function(err, user) {
	if(err){return console.log(err);}
	console.log("Added everything");
	process.exit(0);
})

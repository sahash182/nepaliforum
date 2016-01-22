var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	name: String,
	username: String,
	email: String
});

// define user model
var User = mongoose.model('User', UserSchema);

// export user model
module.exports = User;
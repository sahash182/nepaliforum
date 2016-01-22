var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nepaliforum");

module.exports.User = require("./user.js");
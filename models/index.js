var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nepaliforum");

module.exports.user = require("./user.js");
const mangoose = require("mongoose");

const userSchema = new mangoose.Schema({
 name: String,
 email:String,
 password:String,
 isAdmin: Boolean
});

const user = mangoose.model("users", userSchema);
module.exports = user;
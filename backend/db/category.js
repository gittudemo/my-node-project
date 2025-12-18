const mangoose = require("mongoose");

const categorySchema = new mangoose.Schema({
 name: String,
});


const category = mangoose.model("categories", categorySchema);
module.exports = category;
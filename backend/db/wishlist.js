const mangoose = require("mongoose");
const user = require("./user");

const wishlistSchema = new mangoose.Schema({
 userId: { type: mangoose.Schema.Types.ObjectId, ref: 'users' },
 productIds: Array(string)
});


const wishlist = mangoose.model("wishlist", wishlistSchema);
module.exports = wishlist;
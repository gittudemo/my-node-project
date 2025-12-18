const mangoose = require("mongoose");

const productSchema = new mangoose.Schema({
 name: String,
 description: String,
 purchasePrice: Number,
 shortDescription: String,
 sellingPrice: Number,
 images:Array(string),
 categoryId: { type: mangoose.Schema.Types.ObjectId, ref: 'categories' }
});


const product = mangoose.model("products", productSchema);
module.exports = product;
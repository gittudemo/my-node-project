const mangoose = require("mongoose");

const orderSchema = new mangoose.Schema({
 date :Date,
 items: Array(any),
 status:Number,
});

const order = mangoose.model("orders", orderSchema);
module.exports = order;
const mangoose = require("mongoose");

const cartSchema = new mangoose.Schema({
 userID: { type: mangoose.Schema.Types.ObjectId, ref: 'users' },
 productIDs: Array(string)
});


const cart = mangoose.model("carts", cartSchema);
module.exports = cart;


// In Node.js (with MongoDB + Mongoose), we create models and schemas to give structure, validation, and control to otherwise schema-less MongoDB data.
// A Mongoose Schema:
// ✅ Defines what fields exist
// ✅ Enforces data types
// ✅ Adds validation rules
// ✅ Defines relationships (references)
// ✅ Makes your code predictable.



// const mongoose = require("mongoose");

// const cartSchema = new mongoose.Schema({
//   userID: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'users' 
//   },
//   productIDs: [String]
// });
// 🔹 userID
// js
// Copy code
// userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
// Stores the User’s ID

// ObjectId is MongoDB’s unique identifier

// ref: 'users' creates a relationship

// Allows population later:


// Why do we create a Model?
// const cart = mongoose.model("carts", cartSchema);


// A Model:

// Is a constructor for documents

// Represents a MongoDB collection

// Provides CRUD methods

// With model you can:
// cart.create()
// cart.find()
// cart.findById()
// cart.updateOne()
// cart.deleteOne()


// Without a model ❌ → You cannot interact with the database easily.


// 4️⃣ Why not write data directly to MongoDB?

// Without schema/model:

// {
//   userID: "abc",
//   productIDs: 123,
//   randomField: true
// }


// ❌ Invalid data
// ❌ No validation
// ❌ Bugs in production

// With schema/model:

// {
//   userID: ObjectId("65f..."),
//   productIDs: ["p1", "p2"]
// }


// ✅ Clean
// ✅ Valid
// ✅ Reliable
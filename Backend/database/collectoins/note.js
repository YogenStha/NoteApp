// model
const mongoose = require("mongoose");

const Note = mongoose.model("Note", {
  title: String,
  content: String,

});


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports ={
  Note,
  User
}
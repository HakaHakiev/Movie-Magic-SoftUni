const { Schema, model, MongooseError } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true, // unique е индекс, няма да позволи второ ентри със същата стойност
    match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, "Invalid email address"],
    minLength: [10, "Email should be at least 10 characters"],
  },
  password: {
    type: String,
    match: [/^[a-zA-Z0-9]+$/, "Password should be alphanumeric"],
    minLength: [6, "Password must be at least 6 characters"],
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 12);
  this.password = hash;
});

userSchema.virtual("rePassword").set(function (value) {
  // създаваме виртуална rePassword, не отива в базата данни, а само проверява
  if (value !== this.password) {
    throw new MongooseError("Password missmatch!");
  }
});

const User = model("User", userSchema);

module.exports = User;

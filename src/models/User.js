const { Schema, model, MongooseError } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true, // unique е индекс, няма да позволи второ ентри със същата стойност
  },
  password: {
    type: String,
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

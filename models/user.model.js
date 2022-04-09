const mongoose = require("../db");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: [true, "tài khoản không được bỏ trống"] },
  password: {
    type: String,
    required: [true, "mật khẩu không được bỏ trống"],
  },
});

const User = mongoose.model("User", UserSchema, "users");
User.getUseradas = () => {};

module.exports = User;

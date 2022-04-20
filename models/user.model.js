const mongoose = require("../db");
const HaveSkinModel = require("./haveskin.model");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: [true, "tài khoản không được bỏ trống"] },
  password: {
    type: String,
    required: [true, "mật khẩu không được bỏ trống"],
  },
});

const User = mongoose.model("User", UserSchema, "users");
User.getUserSkins = async (id) => {
  let docs = await HaveSkinModel.find({ user: id });
  return docs;
};
User.addUserSkin = async (userid, skinid) => {
  await HaveSkinModel.insertMany({ user: userid, skin: skinid });
};

module.exports = User;

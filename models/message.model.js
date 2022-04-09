const mongoose = require("../db");
const MessageSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    value: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("Message", MessageSchema, "messages");

module.exports = User;

const mongoose = require("../db");
const HaveSkinSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    link: { type: String, required: true },
  },
  { timestamps: true }
);
const HaveSkin = mongoose.model("HaveSkin", HaveSkinSchema, "haveSkins");

module.exports = HaveSkin;

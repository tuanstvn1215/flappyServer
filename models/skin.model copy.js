const mongoose = require("../db");
const SkinSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    link: { type: String, required: true },
  },
  { timestamps: true }
);
const Skin = mongoose.model("Skin", SkinSchema, "skins");

module.exports = Skin;

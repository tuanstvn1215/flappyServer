const mongoose = require("../db");
const SkinSchema = new mongoose.Schema(
  {
    isfree: { type: Boolean, default: false },
    name: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);
const Skin = mongoose.model("Skin", SkinSchema, "skins");

module.exports = Skin;

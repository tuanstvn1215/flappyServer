const mongoose = require("../db");
const ScoreSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    score: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Score = mongoose.model("Score", ScoreSchema, "scores");

module.exports = Score;

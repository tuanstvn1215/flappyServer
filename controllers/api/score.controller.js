const ScoreModel = require("../../models/score.model");
class ScoreController {
  constructor() {}
  async getScore(req, res) {
    try {
      res.set("Access-Control-Allow-Credentials", "true");
      if (req.signedCookies._id) {
        let scores = await ScoreModel.find({ user: req.signedCookies._id });
        scores = scores.map((value) => {
          let item = {
            score: value.score,
            time: new Date(value.createdAt).toDateString(),
          };
          return item;
        });
        res.json({
          code: 1,
          message: "lấy thành công",
          scores: scores,
        });
        return;
      } else {
        res.json({ code: 0, message: "Không có signed cookie" });
      }
      return;
    } catch (error) {
      res.json({ code: 0, message: error.message });
    }
  }
  async getRank(req, res) {
    try {
      res.set("Access-Control-Allow-Credentials", "true");
      console.log(1);
      let scores = await ScoreModel.find({})
        .sort({ score: -1 })
        .limit(7)
        .populate("user")
        .exec();
      console.log(scores);
      scores = scores.map((value) => {
        let item = {
          score: value.score,
          time: new Date(value.createdAt).toDateString(),
          username: value.user.username,
        };
        return item;
      });
      res.json({
        code: 1,
        message: "lấy thành công",
        scores: scores,
      });
    } catch (error) {
      res.json({ code: 0, message: error.message });
    }
  }
  async store(req, res) {
    try {
      res.set("Access-Control-Allow-Credentials", "true");
      let scorevalue = req.body.score;

      let score = new ScoreModel({
        user: res.locals.user.id,
        score: scorevalue,
      });

      await score.save();
      res.json({ code: 1, message: "Lưu thành công" });
    } catch (error) {
      res.json({ code: 0, message: error.message });
    }
  }
}
module.exports = new ScoreController();

const UserModel = require("../../models/user.model");
const MessageModel = require("../../models/message.model");

class MessageController {
  constructor() {}
  async getMessages(req, res) {
    res.set("Access-Control-Allow-Credentials", "true");

    let mes = await MessageModel.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("user");
    res.json(mes);
  }
  async storeMessage(req, res) {
    res.set("Access-Control-Allow-Credentials", "true");
    try {
      let value = req.body.value;

      let message = new MessageModel({
        user: res.locals.user._id,
        value: value,
      });
      await message.save();
      res.json({ code: 1, message: "lưu thành công" });
    } catch (error) {
      res.json({ code: 0, message: error.message });
    }
  }
}
module.exports = new MessageController();

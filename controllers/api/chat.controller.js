const UserModel = require("../../models/user.model");
const MessageModel = require("../../models/message.model");

class MessageController {
  constructor() {}
  async getMessages(req, res) {
    {
      let mes = await MessageModel.find();
      console.log(mes);
      res.json(mes);
    }
  }
  async storeMessage(req, res) {
    try {
      let value = req.body.value;
      res.set("Access-Control-Allow-Credentials", "true");
      let message = new MessageModel({
        user: res.locals.user._id,
        value: value,
      });
      message.save();
      res.json({ code: 1, message: "lưu thành công" });
    } catch (error) {
      res.json({ code: 0, message: error.message });
    }
  }
}
module.exports = new MessageController();

const SkinModel = require("../../models/skin.model");
const HaveSkinModel = require("../../models/haveskin.model");
const UserModel = require("../../models/user.model");
class SkinController {
  constructor() {}
  async getSkins(req, res) {
    let skins = await SkinModel.find({});
  }
  async store(req, res) {
    res.set("Access-Control-Allow-Credentials", "true");
    try {
      let link = req.body.link;
      let skinname = req.body.skinname;
      link = "https://i.imgur.com/DznCJPN.png";
      await SkinModel.insertMany({ name: skinname, link: link });
      res.json({ code: 1, message: "Lưu thành công" });
    } catch (error) {
      console.log(error);
      res.json({ code: 0, message: "Lưu thất bại vì lỗi: " });
    }
  }
  async update(req, res) {
    res.set("Access-Control-Allow-Credentials", "true");
    try {
      let skinid = req.body.id;
      let skinlink = req.body.link;
      let skinname = req.body.skinname;

      await SkinModel.findByIdAndUpdate(skinid, {
        name: skinname,
        link: skinlink,
      });
      res.json({ code: 1, message: "Lưu thành công" });
    } catch (error) {
      console.log(error);
      res.json({ code: 0, message: "Lưu thất bại vì lỗi: " });
    }
  }
  async getuserskins(req, res) {
    let skins = [];
    if (res.locals.user) {
      let user_id = res.locals.user.id;
      let user_skin = await UserModel.getUserSkins(user_id);
      skins.concat(user_skin);
    }
    let freeskin = await SkinModel.find({ isfree: true });
    skins.concat();

    console.log(skins);
  }
}
module.exports = new SkinController();

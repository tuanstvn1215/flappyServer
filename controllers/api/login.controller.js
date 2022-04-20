const UserModel = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const { signedCookie } = require("cookie-parser");
class LoginController {
  constructor() {}
  async checkcookie(req, res) {
    try {
      res.set("Access-Control-Allow-Credentials", "true");
      if (req.signedCookies._id) {
        let user = await UserModel.findById(req.signedCookies._id);
        res.json({
          code: 1,
          message: "Có signed cookie",
          username: user.username,
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
  async login(req, res) {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let patt = /\w+/;
    res.set("Access-Control-Allow-Credentials", "true");
    if (username.length > 16 || username.length < 1) {
      res.send({
        code: 0,
        message: "Tài khoản chỉ chứa tối đa 16 kí tự",
      });
      return;
    }
    if (password.length < 1) {
      res.send({
        code: 0,
        message: "Mật khẩu không được bỏ trống",
      });
      return;
    }
    if (username.match(patt) != username) {
      res.send({
        code: 0,
        message: "Tài khoản chỉ bao gồm kí tự và số",
      });
      return;
    }
    let userdb = await UserModel.findOne({
      username: username,
    });

    if (!userdb) {
      res.json({ code: 0, message: "tài khoản không tồn tại" });
      return;
    }
    let flag = await bcrypt.compare(password, userdb.password);

    if (!flag) {
      res.json({ code: 0, message: "Sai mật khẩu" });
      return;
    }

    res.cookie("_id", userdb._id, {
      signed: true,
    });

    res.json({
      code: 1,
      message: "Đăng nhập thành công",
    });
  }
  async logout(req, res) {
    res.set("Access-Control-Allow-Credentials", "true");
    res.clearCookie("_id");
    res.json({ code: 1, message: "Đăng xuất thành công" });
  }
  async register(req, res) {
    try {
      res.set("Access-Control-Allow-Credentials", "true");
      let username = req.body.username;
      let password = req.body.password;
      let patt = /\w+/;
      if (username.length > 16 || username.length < 1) {
        res.send({
          code: 0,
          message: "Tài khoản chỉ chứa tối đa 16 kí tự",
        });
        return;
      }
      if (password.length < 1) {
        res.send({
          code: 0,
          message: "Mật khẩu không được bỏ trống",
        });
        return;
      }
      if (username.match(patt) != username) {
        res.json({
          code: 0,
          message: "Tài khoản chỉ bao gồm kí tự và số",
        });
        return;
      }
      let user = await UserModel.findOne({ username: username });
      if (user) res.json({ code: 0, message: "tài khoản đã tồn tại" });
      else {
        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        await UserModel.insertMany({ username: username, password: password });
        res.json({ code: 1, message: "đăng kí thành công" });
      }
    } catch (error) {
      res.json({ code: 0, message: "xay ra loi" });
    }
  }
}
module.exports = new LoginController();

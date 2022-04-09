const Router = require("express").Router();

const loginRoter = require("./api/login.route");
const chatRoter = require("./api/chat.route");
Router.use("/login", loginRoter);
Router.use("/chat", chatRoter);
module.exports = Router;

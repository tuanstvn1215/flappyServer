const ChatController = require("../../controllers/api/chat.controller");
const {
  default: authMiddleware,
} = require("../../middlewares/auth.middleware");

const Router = require("express").Router();

Router.get("/getmessages", ChatController.getMessages);
Router.post("/message", authMiddleware.auth, ChatController.storeMessage);

module.exports = Router;

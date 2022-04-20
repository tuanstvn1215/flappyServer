const SkinController = require("../../controllers/api/skin.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
const Router = require("express").Router();

Router.get("/skin", SkinController.store);

Router.get("/userskins", SkinController.getuserskins);

module.exports = Router;

const LoginController = require("../../controllers/api/login.controller");

const Router = require("express").Router();

Router.post("/login", LoginController.login);
Router.get("/logout", LoginController.logout);
Router.get("/checkcookie", LoginController.checkcookie);
Router.post("/register", LoginController.register);

module.exports = Router;

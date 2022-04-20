const ScoreController = require("../../controllers/api/score.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
const Router = require("express").Router();

Router.post("/score", authMiddleware.auth, ScoreController.store);

Router.get("/scores", authMiddleware.auth, ScoreController.getScore);

Router.get("/rank", ScoreController.getRank);
module.exports = Router;

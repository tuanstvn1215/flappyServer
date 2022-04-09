if (!process.env.PORT) require("dotenv").config();
const ApiRouter = require("./routes/api.route");
const cookieParser = require("cookie-parser");
const serect = process.env.serect || "asdasdad3234%$";
const mongoose = require("./db");
const UserModel = require("./models/user.model");
const express = require("express");

const app = express();
var port = 8800;
app.use(express.static("public"));
app.use(cookieParser(serect));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  if (req.body)
    for (const property in req.body) {
      req.body = JSON.parse(property);
    }
  next();
});
app.get("/asd", (req, res) => {
  res.send("asd");
});
app.use("/api", ApiRouter);

app.listen(process.env.PORT || port);

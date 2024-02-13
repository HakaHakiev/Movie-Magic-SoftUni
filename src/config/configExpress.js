const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { auth } = require("../middlewares/authMiddleware");

function configExpress(app) {
  app.use(express.static(path.resolve("src/public")));
  app.use(express.urlencoded({ extended: false })); // take the data from create
  app.use(cookieParser());
  app.use(auth);

  return app;
}

module.exports = configExpress;

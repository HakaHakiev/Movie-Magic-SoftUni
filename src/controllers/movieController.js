const router = require("express").Router();

// const movieService = require("../services/movieService");

router.get("/create", (req, res) => {
  res.render("create");
});

module.exports = router;

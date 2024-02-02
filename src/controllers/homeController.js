const router = require("express").Router();

const movieService = require("../services/movieService");

router.get("/", async (req, res) => {
  const movies = await movieService.getAll().lean(); // array of documents

  res.render("home", { movies });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/search", async (req, res) => {
  // console.log(req.query);
  const { title, genre, year } = req.query;
  const movieResult = await movieService.search(title, genre, year).lean();

  res.render("search", { movies: movieResult, title, genre, year });
});

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;

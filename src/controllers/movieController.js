const router = require("express").Router();

const movieService = require("../services/movieService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  // console.log(req.body);
  const newMovie = req.body;

  try {
    await movieService.create(newMovie);

    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    res.redirect("/create");
  }
});

router.get("/movies/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();

  // TODO: This is not perfect, use handlebars helpers
  // movie.rating = new Array(Number(movie.rating)).fill(true);
  movie.ratingStars = "&#x2605".repeat(movie.rating);

  // console.log(movie);
  res.render("details", { movie });
});

router.get("/movies/:movieId/attach", (req, res) => {
  res.render("movie/attach");
});

module.exports = router;

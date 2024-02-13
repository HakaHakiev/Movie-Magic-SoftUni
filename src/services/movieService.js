const Movie = require("../models/Movie");
const Cast = require("../models/Cast");

exports.getAll = () => Movie.find();

// TODO: Filter result in MongoDB
exports.search = (title, genre, year) => {
  // let result = await Movie.find().lean();
  let query = {};

  if (title) {
    // result = result.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
    query.title = new RegExp(title, "i");
  }

  if (genre) {
    // result = result.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
    query.genre = genre.toLowerCase();
  }

  if (year) {
    // result = result.filter((movie) => movie.year === year);
    query.year = year;
  }

  return Movie.find(query);
};

exports.getOne = (movieId) => Movie.findById(movieId).populate("casts"); // movies.find((movie) => movie._id == movieId)

exports.create = (movieData) => Movie.create(movieData);

exports.edit = (movieId, movieData) =>
  Movie.findByIdAndUpdate(movieId, movieData);

exports.attach = async (movieId, castId) => {
  // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
  const movie = await this.getOne(movieId);

  // This is optional and we don't need it in this case
  // const cast = await Cast.findById(castId);
  // cast.movies.push(movie)
  // await cast.save()

  // TODO: validate castId if exists
  // TODO: validate if cast is already added
  movie.casts.push(cast);
  // cast.movies.push(movie);

  await movie.save();

  return movie;
};

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);

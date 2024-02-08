const Movie = require("../models/Movie");
const Cast = require("../models/Cast");

exports.getAll = () => {
  // return [...movies];
  // return movies.slice();
  const movies = Movie.find();

  return movies;
};

// TODO: Filter result in MongoDB
exports.search = (title, genre, year) => {
  // let result = await Movie.find().lean();
  let query = Movie.find();

  if (title) {
    // result = result.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
    query = query.find({ title: new RegExp(title, "i") });
  }

  if (genre) {
    // result = result.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
    query = query.find({ genre: genre.toLowerCase() });
  }

  if (year) {
    // result = result.filter((movie) => movie.year === year);
    query = query.find({ year });
  }

  return query;
};

exports.getOne = (movieId) => Movie.findById(movieId).populate("casts"); // movies.find((movie) => movie._id == movieId)

exports.create = (movieData) => Movie.create(movieData);

exports.edit = (movieId, movieData) =>
  Movie.findByIdAndUpdate(movieId, movieData);

exports.attach = async (movieId, castId) => {
  // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
  const movie = await this.getOne(movieId);
  // const cast = await Cast.findById(castId);

  // TODO: validate castId if exists
  // TODO: validate if cast is already added
  movie.casts.push(castId);
  // cast.movies.push(movie);

  // await cast.save();
  return movie.save();
};

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);

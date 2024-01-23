const movies = [
  {
    _id: 1,
    title: "Jungle Cruise",
    genre: "Adventure",
    director: "Pedri",
    year: "2020",
    imageUrl: "/img/jungle-cruise.jpeg",
    rating: "4",
    description:
      "reaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world.",
  },
];

exports.getAll = () => {
  // return [...movies];
  return movies.slice();
};

exports.search = (title, genre, year) => {
  let result = movies.slice();

  if (title) {
    result = result.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (genre) {
    result = result.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (year) {
    result = result.filter((movie) => movie.year === year);
  }

  return result;
};

exports.getOne = (movieId) => {
  const movie = movies.find((movie) => movie._id == movieId);

  return movie;
};

exports.create = (movieData) => {
  // console.log(movieData);
  movieData._id = movies[movies.length - 1]._id + 1;
  movies.push(movieData);
};

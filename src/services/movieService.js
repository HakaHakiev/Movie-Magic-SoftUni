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
      "Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world.",
  },
  {
    _id: 2,
    title: "The Little Mermaid",
    genre: "Fantasy",
    director: "Spielberg",
    year: "2017",
    imageUrl: "/img/the-little-mermaid.jpg",
    rating: "3",
    description:
      "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure.",
  },
  {
    _id: 3,
    title: "Home Alone",
    genre: "Comedy",
    director: "Robert",
    year: "2004",
    imageUrl: "/img/home-alone.jpeg",
    rating: "5",
    description:
      "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. ",
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

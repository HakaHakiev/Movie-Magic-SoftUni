const movies = [
  {
    _id: 1,
    title: "Jungle Cruise",
    genre: "Adventure",
    director: "Pedri",
    year: "2020",
    imageUrl: "img/jungle-cruise.jpeg",
    rating: "4",
    description:
      "reaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world.",
  },
];

exports.getAll = () => {
  // return [...movies];
  return movies.slice();
};

exports.create = (movieData) => {
  // console.log(movieData);
  movieData._id = movies[movies.length - 1]._id + 1;
  movies.push(movieData);
};

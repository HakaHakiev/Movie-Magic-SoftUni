const movies = [
  {
    title: "Jungle Cruise",
    genre: "Adventure",
    director: "Pedri",
    year: "2020",
    imageUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQUExYUExQXFxYYGiAcGRkZGh8fHxwgHyEeGyAgICAhHishIRsmHh4bIjQiJiosLy8vHyA1OjUtOSkuLywBCgoKDg0OHBAQHCwnIScvLjAuMDAwMS4uNC4wLi4xLjAxLi4uLi4uLi4uLjAuLCwxLi4uLi4uLi4wLi4wLi4uLv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xAA/EAABAwIEBAQDBgUEAgEFAAABAgMRACEEBRIxBkFRYRMicYEykaEHFEKxwfAjUmLR4RVygvEzopIWJGODsv/EABsBAAMBAQEBAQAAAAAAAAAAAAMEBQIGAQAH/8QANBEAAQQBAwIEAwcEAwEAAAAAAQACAxEEEiExQVEFEyJhMnGxFCOBkaHR8FLB4fEVQmIz/9oADAMBAAIRAxEAPwARxhgl4UhOoqaVISrmP6VRaY584pYwmcLaUSFSgxrbJUAuJA+Eg2J60x8T5v4zZQb6oPoeX1qFlzzjDCnMOyguoMrUUyoJMjyg7xaY2mlfDYz8fBHKezJDXlHcVslVKXHlKS0hS1KnygavXnai+KKVFDbKBIGmVE6lHYlUq0gdgBHWtHs8c1pdUR4hSUrUEwTe0iOn50PbxZLi1jc8rfuara2jrz9FO8vqQpH31xhfxAlKpCgQoKgRuLGAYrMbminxcqKj1v3gAV1wOLSpCwUhWqIBuZ2AHz29KuLgngVjDtoK0hb8StRvB6D+kcqVyMny20Dd9EZsIJBcB81UrOR4koKiw4AR/Kb1d2B4GYcwbDOKT4hQhMKSShSVaQCUkER+u5qdmmNZQDqj3qXkWcofZS42QRcW/pMfpUsZut2l1bdkWXG0MDwDS8y4qw4QwtZXCYSs7rAteLa4ieu9tgScWCJEGdx1qLmDIcTvB5HoeR/fKaG5bmG6VWUDCh0P9uY7E",
    rating: "4",
    description:
      "reaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world.",
  },
];

exports.create = (movieData) => {
  console.log(movieData);
  movies.push(movieData);
};

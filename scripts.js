let movieArr = [];

function createMovieCard(movie) {
  const card = document.createElement("div");
  // card.classList.add("col-sm-12", "col-md-6", "col-lg-4", "movie-card");
  card.classList.add("movie-card");
  card.id = movie.id;
  card.innerHTML = `  
    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="movie image">
    <h1>${movie.title}</h1>    
    <p>${movie.overview}</p>
    <strong><i class="ic-star"></i> ${movie.vote_average}</strong>    
  `;
  card.addEventListener("click", () => {
    alert(`Movie ID: ${movie.id}`);
  });
  return card;
}

const API_KEY = "a90d7e03157dfda3a0421a3f9cbb4d6b"; // 발급받은 API 키
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results; // data 객체에서 results 키에 해당하는 값을 movies에 담는다. 길이가 20인 배열 안에 각 영화의 정보가 객체 형태로 담긴다.
    const movieContainer = document.querySelector(".movie-container");
    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      movieContainer.appendChild(movieCard);
    });

    movieArr = movies;
  })
  .catch((error) => console.error("Error:", error));

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

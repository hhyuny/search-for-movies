// 검색 기능 구현에서 사용할 영화 정보가 담긴 배열
let movieArr = [];

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.id = movie.id;
  card.innerHTML = `  
    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="movie image">
    
    <h1>${movie.title}</h1>  
    
      
    

    <div class="desc">      
      <button class="desc-button" id="desc-button">Detail</button>
      <div class="desc-content" id="desc-content">
        <button class="close-button">&times;</button>
        <p>${movie.overview}</p>
      </div>
    </div>
    <strong><i class="ic-star"></i> ${movie.vote_average}</strong>
    
  `;

  const cardImg = card.querySelector("img");
  cardImg.addEventListener("click", () => {
    alert(`Movie ID: ${movie.id}`);
  });

  const descButton = card.querySelector(".desc-button");
  const descContent = card.querySelector(".desc-content");
  const closeButton = card.querySelector(".close-button");
  console.log(closeButton);
  descButton.addEventListener("click", () => {
    descContent.classList.toggle("is-active");
  });
  closeButton.addEventListener("click", () => {
    descContent.classList.remove("is-active");
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

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTBkN2UwMzE1N2RmZGEzYTA0MjFhM2Y5Y2JiNGQ2YiIsIm5iZiI6MTcyMTc5MzEyMy4wOTE1NzQsInN1YiI6IjY2YTA3ODkwZTIzNzRmOTY5ODZlOWRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WMPfLXNApiKu0twau-TCRgroweSp3pzqxaRrfHLUtic",
//   },
// };

// fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

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

// 검색 기능 1
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // 새로고침 방지
//   const searchWord = input.value.toLowerCase();
//   const movieCards = document.querySelectorAll(".movie-card");

//   movieCards.forEach((card) => {
//     const title = card.querySelector("h1").innerText.toLowerCase();
//     if (title.includes(searchWord)) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// });

// 검색 기능 2
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // 새로고침 방지

//   // 검색어를 소문자로 변경
//   const searchWord = input.value.toLowerCase();

//   // 검색어를 포함하지 않는 영화들을 담은 배열
//   const notIncludedMovies = movieArr.filter((movie) => {
//     return !movie.title.toLowerCase().includes(searchWord);
//   });

//   // UI에 존재하는 모든 영화 카드를 저장
//   const movieCards = document.querySelectorAll(".movie-card");

//   // 검색 이벤트가 발생했을 때 모든 카드의 display를 block으로 설정
//   movieCards.forEach((card) => {
//     card.style.display = "block";
//   });

//   // 모든 카드를 순회하면서 notIncludedMovies 리스트에 존재하는 카드에는 display를 none으로 변경하여 보이지 않도록 설정
//   notIncludedMovies.forEach((foundMovie) => {
//     movieCards.forEach((card) => {
//       const title = card.querySelector("h1").innerText.toLowerCase();

//       if (title.includes(foundMovie.title.toLowerCase())) {
//         card.style.display = "none";
//       }
//     });
//   });
// });

// 포함되지 않는 영화가 아니라 포함되는 영화로 로직을 바꿔보자
// 모든 카드를 display none 처리했다가 포문을 한번?만 써서 해당하는 카드에 블락을 처리해주기

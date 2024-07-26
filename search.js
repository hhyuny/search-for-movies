// 검색 기능 - 검색어를 포함하는 영화로 리팩토링
form.addEventListener("submit", (e) => {
  e.preventDefault(); // 새로고침 방지

  // UI에 존재하는 모든 영화 카드를 저장
  const movieCards = document.querySelectorAll(".movie-card");

  // 검색 이벤트가 발생했을 때 모든 카드의 display를 none으로 설정하여 모든 카드를 UI에서 없애줌
  movieCards.forEach((card) => {
    card.style.display = "none";
  });

  // 검색어를 소문자로 변경
  const searchWord = input.value.toLowerCase();

  // 검색어를 포함하는 영화들을 담은 배열
  const includedMovies = movieArr.filter((movie) => movie.title.toLowerCase().includes(searchWord));

  // 검색어를 포함하는 영화의 id를 가져와서 target에 저장 후 display를 block으로 처리하여 화면에 표출
  includedMovies.forEach((includedMovie) => {
    const target = document.getElementById(includedMovie.id);
    target.style.display = "block";
  });
});

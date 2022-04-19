
const api_key = "2972e8518de2756fb27d6a3c1274c209";
// const api_read_access =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTcyZTg1MThkZTI3NTZmYjI3ZDZhM2MxMjc0YzIwOSIsInN1YiI6IjYyNThiOWYxMDkxOTFiMDA1MDgxZDJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X_RenPFEI5VfbYqPx3JlcL4vgPgsbHlli6YYfUK4Lr4";
// const practice_request =
//   "https://api.themoviedb.org/3/movie/550?api_key=2972e8518de2756fb27d6a3c1274c209";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`,
};
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
// }



export default requests;

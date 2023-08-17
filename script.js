document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', searchMovies);
  });
  
  async function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput) {
      const movies = await fetchMovies(searchInput);
      displayMovies(movies);
    }
  }
  
  async function fetchMovies(query) {
    const apiKey = '9c1b4d29'; 
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`);
    
    const data = await response.json();
    return data.Search || [];
  }
  
  function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
  
    movies.forEach(movie => {
      const movieItem = createMovieItem(movie);
      movieList.appendChild(movieItem);
    });
  }
  
  function createMovieItem(movie) {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
  
    const movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = movie.Title;
    movieItem.appendChild(movieTitle);
  
    const movieYear = document.createElement('p');
    movieYear.textContent = `Year: ${movie.Year}`;
    movieItem.appendChild(movieYear);
  
    return movieItem;
  }
  

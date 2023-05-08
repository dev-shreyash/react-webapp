import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import logo from "./LOGO.svg"
import "./App.css";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=ba044065"; 
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedGenre] = useState("");
 
  useEffect(() => {
    if (searchTerm !== "") {
      searchMovies("", selectedGenre);
    } else {
      searchMovies("Marvel" || selectedGenre);
    }
  }, [searchTerm, selectedGenre]);
  

  const searchMovies = async (title, genre) => {
    const response = await fetch(`${API_URL}&s=${title}&type=movie`);
    const data = await response.json();
    console.log(data);
    if (genre) {
      const filteredMovies = data.Search.filter(movie => movie.Genre.includes(genre));
      setMovies(filteredMovies);
    } else {
      setMovies(data.Search);
    }
  };
  
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    searchMovies(event.target.value, selectedGenre);
  };

  return (
    <div className="app">
      <div className="logo">
        <img
      src={logo}
      alt="logo" />
      <h1>MovieLand</h1></div>
      <div className="topmovies">
        <p>Top Movies</p></div>
        <div class="top-movies">
  <div class="top-movie active" onClick={() => searchMovies("Avatar: The Way of Water")}>
    Avatar: The Way of Water
  </div>
  <div class="top-movie" onClick={() => searchMovies("Avengers: Endgame")}>
    Avengers: Endgame
  </div>
  <div class="top-movie" onClick={() => searchMovies("The Batman")}>
    The Batman
  </div>
  <div class="top-movie" onClick={() => searchMovies("Jumanji")}>
    Jumanji
  </div>
  <div class="top-movie" onClick={() => searchMovies("The Jungle Book")}>
    The Jungle Book
  </div>
  <div class="top-movie" onClick={() => searchMovies("Blade Runner 2049")}>
    Blade Runner 2049
  </div>
</div>

      
      
      <div className="search">
        <input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for movies"
        />
        
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />

      </div>
      
      
      
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      <div></div>
      <div className="menu">
        <li><a href="mailto:bhosaleshreysah2@gmail.com?" subject="HTML link" title="contact shreyash">- Shreyash Bhosale. 2023</a></li>
      </div>
      <div className="footer">
        <p>Made with ❤️ by Shreyash Bhosale using React.js</p>
      </div>
    </div>
    
  );
};

export default App;

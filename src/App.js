import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import logo from "./LOGO.svg"
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchTerm !== "") {
      searchMovies(searchTerm);
    } else {
      searchMovies("Marvel");
    }
  }, [searchTerm]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }; 


  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
        <div class="top-movie active">Avatar: The Way of Water</div>
        <div class="top-movie">Avengers: Endgame</div>
        <div class="top-movie">The Batman</div>
        <div class="top-movie">Jumanji</div>
        <div class="top-movie">The Jungle Book</div>
        <div class="top-movie">Blade Runner 2049</div>
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

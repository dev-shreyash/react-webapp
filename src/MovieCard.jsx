import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type,Genre, Language  } }) => {
  console.log('imdbID:', imdbID);
  console.log('Year:', Year);
  console.log('Poster:', Poster);
  console.log('Title:', Title);
  console.log('Type:', Type);
  console.log('Genre:', Genre);
  console.log('Language:', Language);
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        {Genre && <p>Genre: {Genre}</p>}
        {Language && <p>Language: {Language}</p>}
      </div>
    </div>
  );
}

export default MovieCard;
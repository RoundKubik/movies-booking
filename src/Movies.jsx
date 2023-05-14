import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "./components/Filter/Filter";
import MovieCard from "./components/MovieCard/MovieCard";

const genres = ["Action", "Adventure", "Fantasy", "Drama"];

const Movies = () => {
  const movies = useSelector((state) => state.movies.value);
  const [option, setOption] = useState(genres[0]);

  return (
    <div className="movies">
      <h1>Movies</h1>
      <Filter options={genres} setOption={setOption} activeOption={option} />
      <h2 className="movies-count">
        {movies.length} {movies.length > 1 ? "items" : "item"}
      </h2>
      <div className="movies-cards-wrapper">
        {movies &&
          movies.map((movie, index) => {
            if (movie.genres.includes(option)) {
              return <MovieCard key={index} movie={movie} />;
            }
          })}
      </div>
    </div>
  );
};

export default Movies;

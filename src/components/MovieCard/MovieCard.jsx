import React, { useState } from "react";
import MoviePopup from "../MoviePopup/MoviePopup";
import Popup from "../Popup/Popup";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <div className="movie-card">
        <div className="movie-info">
          <img className="movie-poster" src={movie.img} alt={movie.alt} />
          <h2 className="movie-title">{movie.title}</h2>
          <span className="movie-genres">
            <span className="movie-genres__title">Genres:</span> {movie.genres.join(", ")}
          </span>
        </div>
        <button className="button movie-card__button" type="button" onClick={() => setOpenPopup(true)}>
          Buy
        </button>
      </div>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <MoviePopup movie={movie} cancel={() => setOpenPopup(false)} />
      </Popup>
    </>
  );
};

export default MovieCard;

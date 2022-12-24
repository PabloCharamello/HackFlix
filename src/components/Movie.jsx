// import MovieModal from "./Modal/MovieModal";
import React from "react";
import "./styles/MovieCards.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

function Movie({ movie }) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        // onClick={handleOpen}
        className="content-card col-xl-3 col-lg-3 col-md-4 col-xs-6 mt-4"
      >
        <div className="px-2 flip ">
          <div className="full-poster">
            <p>Rating {movie.vote_average}</p>
            <img
              className="img-card flip1"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`movie poster${`https://image.tmdb.org/t/p/w500${movie.poster_path}`}`}
            />
          </div>
          <div
            id="info-container"
            className={isActive ? "flip:hover" : ""}
            onClick={handleClick}
          >
            <p className="info">{movie.title}</p>
            <p className="info-overview">{movie.overview}</p>
            <div className=" info-overview">
              <span className="link-and-date">Fecha: {movie.release_date}</span>
              <a
                href={`/pelicula/${movie.id}`}
                className="link-info text-center"
              >
                más información
              </a>
            </div>
          </div>
        </div>

        {/* <div className="movie-title">
          <p>{movie.original_title}</p>
        </div> */}
      </div>
      {/* <MovieModal
        movie={movie}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      /> */}
    </>
  );
}

export default Movie;

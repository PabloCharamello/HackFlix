import Carousel from "react-bootstrap/Carousel";
import "./styles/Carousel.css";
import { useState, useEffect } from "react";
import axios from "axios";

function CarouselHeader() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=es&page=1`
        )
        .then((result) => {
          setMovies(result.data.results);
        });
    };
    getMovies();
  }, []);

  return (
    <Carousel fade className="carousel-container">
      {movies.map((movie, index) => {
        return (
          <Carousel.Item className="carousel" key={index}>
            <div>
              <img
                alt={`movie poster ${movie.poster_path}`}
                className="d-block img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <Carousel.Caption>
                <h3 className="hackflix-title">HackFLIX</h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselHeader;

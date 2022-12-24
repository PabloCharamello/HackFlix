import "./styles/MovieCards.css";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieCards = ({ rate }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&page=${page}&include_adult=false&vote_count=1000&language=es&vote_average.gte=${
          rate * 2 - 2
        }`
      );

      setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
    };
    getMovies();
  }, [rate, page]);
  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [rate]);

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={true}
        // loader={}
      >
        <div className="card-container">
          <div className="row">
            {movies.map((movie, index) => {
              return <Movie key={index} movie={movie} />;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default MovieCards;

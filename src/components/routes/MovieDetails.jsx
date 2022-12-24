import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Movie-details.css";
import Navbar from "../Navbar/Navbar.jsx";

/*/genre/movie/list */

function MovieDetails({ Movie }) {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const result = await axios({
          method: "get",
          baseURL: `https://api.themoviedb.org/3/movie/${params.id}`,
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: "es",
            append_to_response: "videos",
          },
        });
        setMovie(result.data);
        setVideo(
          result.data.videos.results.find(
            (element) => element.type.toLowerCase() === "Trailer".toLowerCase()
          ).key
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [params.id]);
  return (
    <div className="container-fluid g-0">
      <Navbar />
      <div className="video-container">
        <iframe
          className="video"
          allow="autoplay; encrypted-media; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          autoPlay={1}
          loop
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video}?controls=0&autoplay=1`}
        />
      </div>
      <p className="movie-title">{movie.title}</p>
      <p className="overview">
        <strong>Sinopsis:</strong> {movie.overview}
      </p>
      <p className="date">
        <strong>Feha de realización:</strong> {movie.release_date}
      </p>
      <p className="rating">
        <strong>Rating:</strong> {movie.vote_average}
      </p>
    </div>
  );
}

export default MovieDetails;

// accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture

import "../../App";
import "../styles/MovieCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCards from "../MovieCards";
import CarouselHeader from "../Carousel";
import Navbar from "../Navbar/Navbar.jsx";
import SentimentalFaces from "../SentimentalFaces/SentimentalFaces";
import "../SentimentalFaces/Sentimental-faces.css";
import React, { useState } from "react";

function Home() {
  const [rate, setRate] = useState(0);
  return (
    <>
      <Navbar />
      <div id="app-container" className="App">
        <div className="carousel-container">
          <CarouselHeader />
        </div>
        <div className="Sentimental-faces-container">
          <div className="Sentimental-faces">
            <h4 className="filter-title">Filtra por Rating!</h4>
          </div>
          <SentimentalFaces rate={rate} setRate={setRate} />
        </div>
        <div className="cards">
          <MovieCards rate={rate} />
        </div>
      </div>
    </>
  );
}

export default Home;

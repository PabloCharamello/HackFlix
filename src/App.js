import "./App.css";
import "./components/styles/MovieCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/SentimentalFaces/Sentimental-faces.css";
import React, { useState } from "react";
import Home from "./components/routes/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/routes/MovieDetails";
import HomeTest from "./components/routes/HomeTest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:id" element={<MovieDetails />} />
        <Route path="/home" element={<HomeTest />} />
        {/* <Route path="*" element={<Error404 />} />         */}
      </Routes>
    </>
  );
}

export default App;

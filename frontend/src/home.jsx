// Home.js
import React from "react";
import candle from "./assets/candle-wallpaper.jpg";
import "./App.css";

const Home = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={candle} alt="placeholder" className="about-image" />
      </div>
      <div className="text-container">
        <h2 className="titleText">Essence</h2>
        <p className="subText">
          Ignite your senses with our delightful scents! Essence Candles brings
          magic and warmth to every corner. Let our candles light up your world
          and fill it with joy, one flicker at a time. Discover your perfect
          match and let the glow speak for you!
        </p>
      </div>
    </div>
  );
};

export default Home;

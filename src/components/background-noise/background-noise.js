import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { Home } from "../../pages";

const BackgroundNoise = ({ file, vol }) => {
  const lowerCityVol = (vol) => {
    var audio = document.getElementById("city-noise");
    audio.volume = vol;
  };
  useEffect(() => {
    if (vol < 0.0 || vol > 1) {
      //<Redirect to={Home} />;
      lowerCityVol(1);
    } else {
      lowerCityVol(vol);
    }
  });
  return <audio id={"city-noise"} autoPlay loop src={`${file}`} />;
};

export default BackgroundNoise;

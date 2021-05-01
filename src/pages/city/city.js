import React, { useState } from "react";
import "./city.css";
import city from "../../assets/city.png";
import forest from "../../assets/forest.png";
import citynoise from "../../assets/city.wav";
import forestnoise from "../../assets/forest.mp3";
import { BackButton } from "../../components";
import {
  BackgroundNoise,
  HandPointerCursor,
  MusiceOne,
  MusiceThree,
  MusiceTwo,
} from "../../components";
import { Redirect } from "react-router";
import { Home } from "../../pages";

const City = () => {
  let [opacity, setOpacity] = useState(1);
  let [cityVol, setCityVol] = useState(1.0);
  let [forestVol, setForestVol] = useState(0.0);

  const lowerOpacity = () => {
    if (opacity <= 0.0) setOpacity(1);
    else setOpacity((opacity - 0.1).toFixed(1));
  };

  const setVol = (vol) => {
    if (vol > 1) {
      return <Redirect to={Home} />;
    } else if (vol <= 0) {
      return <Redirect to={Home} />;
    } else {
      setCityVol(cityVol - 0.1);
    }
  };

  const getVol = () => {
    return cityVol;
  };

  return (
    <div>
      <BackButton />
      <HandPointerCursor />

      <BackgroundNoise file={citynoise} vol={cityVol} />
      {/*<BackgroundNoise file={forestnoise} vol={1} />*/}
      {/*{cityVol === 0.0 ? <BackgroundNoise file={forestVol} /> : null}*/}
      <div id="city">
        <img
          class="city-background"
          src={city}
          alt="city"
          style={{ opacity: `${opacity}` }}
        />
        {/*<MusiceOne />*/}
        <MusiceTwo
          lowerOpacity={lowerOpacity}
          vol={cityVol}
          setVol={setVol}
          getVol={getVol}
        />
        {/*<MusiceThree />*/}
      </div>
      <div id="forest">
        <img class="forest-background" src={forest} alt="forest" />
      </div>
    </div>
  );
};

export default City;

import React, { useEffect } from "react";
import "./music-two.css";

const MusiceTwo = ({ lowerOpacity, vol, setVol, getVol }) => {
  return (
    <div class="music-two">
      <button
        class="music-spot"
        type="submit"
        onClick={() => {
          lowerOpacity();
          setVol(getVol());
        }}
      />
    </div>
  );
};

export default MusiceTwo;

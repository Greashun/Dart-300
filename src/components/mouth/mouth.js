import React from "react";
import mouth from "../../assets/mouth.svg";
import "./mouth.css";

const Mouth = () => {
  return (
    <div class="mouth">
      {/*{mouthSound()}*/}
      <img class="mouth-piece" src={mouth} alt="mouth" />
    </div>
  );
};

export default Mouth;

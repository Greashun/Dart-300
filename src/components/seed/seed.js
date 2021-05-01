import React from "react";
import "./seed.css";
import seed from "../../assets/seed-grown.svg";
const Seed = ({ whitePieceCallback }) => {
  return (
    <div id="seed-piece">
      <img src={seed} alt="seed" />
    </div>
  );
};

export default Seed;

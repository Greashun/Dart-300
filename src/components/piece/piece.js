import React from "react";
import "./piece.css";
import rook from "../../assets/rook.svg";
import smokerook from "../../assets/rook-smoke.svg";

const Piece = ({ blackPieceCallback }) => {
  return (
    <div id="rook-piece">
      <img id="rook-appear" src={smokerook} alt="rook" />
    </div>
  );
};

export default Piece;

import React, { useState } from "react";
import board from "../../assets/checkboard.jpg";
import { HandCheckCursor, Piece, Seed, BackButton } from "../../components";
import "./checkboard.css";
import pollution from "../../assets/pollution.wav";
import soil from "../../assets/soil.wav";

const Checkboard = () => {
  let [blackPiece, setBlackPiece] = useState(false);
  let [whitePiece, setWhitePiece] = useState(false);

  const blackPieceCallback = () => setBlackPiece(true);

  const whitePieceCallback = () => setWhitePiece(true);

  return (
    <div>
      <BackButton />
      <HandCheckCursor />
      <img
        src={board}
        width={window.innerWidth}
        height={window.innerHeight}
        alt="go board"
      />
      <div id="black-piece">
        <button
          id="rook-button"
          onClick={() => {
            blackPieceCallback();
            var emitNoise = document.getElementById("pollute-noise");
            emitNoise.play();
          }}
        />
        <audio id="pollute-noise" src={pollution} />
      </div>
      <div id="white-piece">
        <button
          id="seed-button"
          onClick={() => {
            whitePieceCallback(true);
            var emitSoil = document.getElementById("soil-noise");
            emitSoil.play();
          }}
        />
        <audio id="soil-noise" src={soil} />
      </div>

      {blackPiece ? <Piece /> : null}
      {whitePiece ? <Seed /> : null}
    </div>
  );
};

export default Checkboard;

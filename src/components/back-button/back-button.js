import React from "react";
import { useHistory } from "react-router-dom";
import "./back-button.css";
const BackButton = () => {
  const history = useHistory();

  const homeSubmit = () => {
    history.push("/");
  };
  return (
    <div id="back">
      <button id="back-button" onClick={() => homeSubmit()}>
        {" "}
        Go Back{" "}
      </button>
    </div>
  );
};

export default BackButton;

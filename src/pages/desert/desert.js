import React, { useEffect, useState, useLayoutEffect } from "react";
import desert from "../../assets/desert.png";
import field from "../../assets/field.png";
import sip from "../../assets/sip.wav";
import { Mouth, HandHolderCursor, BackButton } from "../../components";
import "./desert.css";

const Desert = () => {
  const [handPos, setHandPos] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const positionalCallback = ({ ...prop }) => {
    setHandPos({ x: prop.x, y: prop.y });
  };

  const mouthHovered = () => {
    if (
      (handPos.x >= 900 || handPos.x <= 1100) &&
      (handPos.y >= 200 || handPos.y <= 300)
    ) {
      setWidth(width * 0.0025);
      setHeight(height * 0.0025);
    }
  };

  const mouthSound = () => {
    document.getElementById("sip-noise").play();
  };

  useEffect(() => {
    window.addEventListener("resize", mouthHovered);
    window.addEventListener("mouseover", mouthSound);
    setTimeout(() => {
      mouthHovered();
    }, 5000);
    return () => window.removeEventListener("resize", mouthHovered);
  }, []);

  return (
    <div>
      <BackButton />
      <div class="field">
        <img
          class="field-background"
          src={field}
          alt="field"
          style={{
            width: `${width}%`,
            height: `${height}vh`,
          }}
        />
      </div>
      <HandHolderCursor positionalCallback={positionalCallback} />
      <div class="desert">
        <img class="desert-background" src={desert} alt="desert" />
      </div>
      <Mouth />
      <audio id="sip-noise" src={sip} />
    </div>
  );
};

export default Desert;

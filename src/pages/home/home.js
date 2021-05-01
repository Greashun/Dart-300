import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components";
import { ReactComponent as Hand } from "../../assets/hand-homepage.svg";
import "./home.css";

const Home = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#e95841" }}>
      <NavBar />
      <div>
        <h1 style={{ color: "white" }}>Interact and Hear</h1>
      </div>
      <div style={{ position: "static" }}>
        <Hand />
        <div id="thumb">
          <Link to="/portfolio">
            <button id="thumb-button" type="submit" />
          </Link>
        </div>
        <div id="index-finger">
          <Link to="/checkboard">
            <button id="index-button" type="submit" />
          </Link>
        </div>
        <div id="middle-finger">
          <Link to="/city">
            <button id="middle-button" type="submit" />
          </Link>
        </div>
        <div id="ring-finger">
          <Link to="/desert">
            <button id="ring-button" type="submit" />
          </Link>
        </div>
        <div id="pink-finger">
          <Link to="/">
            <button id="pink-button" type="submit" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

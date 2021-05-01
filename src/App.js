//import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Checkboard, Home, City, Desert, About } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/checkboard" component={Checkboard} />
          <Route path="/city" component={City} />
          <Route path="/desert" component={Desert} />
          <Route path="" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Panorama from "./Panorama";
import Map from "./Map";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Panorama />
      <Map photos={data.photos} />
    </div>
  );
}

export default App;

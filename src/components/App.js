import React from "react";
import "../App.css";
import DropDown from "./dropdown";

function App() {
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>Tool-Tip</h1>
        <span className="toolTipCreaterForHeading">Design By Abhay Jirati</span>
      </div>
      <DropDown />
    </div>
  );
}

export default App;

import React from "react";
import "../App.css";
// impoting the dropdown component
import DropDown from "./dropdown";

function App() {
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>Tool-Tip</h1>
        <span className="toolTipCreaterForHeading">Design By Abhay Jirati</span>
      </div>
      {/* rendering the DropDown component */}
      <DropDown />
    </div>
  );
}

export default App;

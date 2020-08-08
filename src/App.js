import React from "react";
import "./App.css";

function App() {
  function toolTipForCreater(e) {
    console.log(e);
    console.log("Target", e.target);
    console.log("Style", e.target.style);
  }

  function removeToolTip(e) {
    e.target.style.backgroundColor = "";
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>Tool-Tip</h1>
        <span className="toolTipCreaterForHeading">Design By Abhay Jirati</span>
      </div>
      <div>
        <button>Download</button>
        <span>50 MB File Size</span>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import "../src/App.css"

function App() {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center ">
        <Card />
      </div>
    </>
  );
}

export default App;

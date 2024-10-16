import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center className="container">
      <h1>To-Do List</h1>
      <div className="container">
        <div className="row">
          <div className="col">Enter Task Here</div>
          <div className="col">Enter Deadline Here</div>
          <div className="col">
            <button className="btn btn-outline-success">Add</button>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </center>
  );
}

export default App;

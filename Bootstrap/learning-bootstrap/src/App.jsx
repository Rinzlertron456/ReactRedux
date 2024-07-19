import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group me-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-light">
            1
          </button>
          <button type="button" class="btn btn-success">
            2
          </button>
          <button type="button" class="btn btn-warning">
            3
          </button>
          <button type="button" class="btn btn-dark">
            4
          </button>
        </div>
        <div class="btn-group me-2" role="group" aria-label="Second group">
          <button type="button" class="btn btn-primary">
            5
          </button>
          <button type="button" class="btn btn-secondary">
            6
          </button>
          <button type="button" class="btn btn-danger">
            7
          </button>
        </div>
        <div class="btn-group" role="group" aria-label="Third group">
          <button type="button" class="btn btn-info">
            8
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppContext from "./AppContext";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  const valueObj = { count, setCount };

  return (
    <AppContext.Provider value={valueObj}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite Logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React Logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </AppContext.Provider>
  );
}

export default App;

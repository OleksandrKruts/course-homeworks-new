import { useState } from "react";

import Title from "./components/Title";
import "./App.css";

function App() {
  const [mode, setMode] = useState("closed");

  const open = () => {
    setMode("loading");

    setTimeout(() => {
      setMode("opened");
    }, 1000);
  };

  const close = () => {
    setMode("closed");
  };

  const getButtonText = () => {
    if (mode === "closed") return "Open";
    if (mode === "loading") return "Loading...";
    if (mode === "opened") return "Close";
  };

  const handleClick = () => {
    if (mode === "loading") return;

    if (mode === "closed") return open();
    if (mode === "opened") return close();
  };

  return (
    <div className="container">
      <button onClick={handleClick} disabled={mode === "loading"}>
        {getButtonText()}
      </button>

      {mode === "loading" && <p>Loading data...</p>}

      {mode === "opened" && (
        <>
          <Title name="Product" variant="title" bold color="red" />
          <Title name="Hello" color="green" />
        </>
      )}
    </div>
  );
}
export default App;

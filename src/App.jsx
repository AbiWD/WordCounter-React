import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light"); // To check if the dark mode is enabled or not!!

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="WordCounter" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter texts here" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;

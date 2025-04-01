import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <TextForm heading="Enter texts here" />
      </div>
    </>
  );
}

export default App;

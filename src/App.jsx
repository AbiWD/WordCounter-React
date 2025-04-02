import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <TextForm heading="Enter texts here" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;

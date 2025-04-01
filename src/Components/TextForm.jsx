import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked!");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = () => {
    // console.log("OnChange?");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary my-3  mx-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;

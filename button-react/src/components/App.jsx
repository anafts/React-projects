import React, { useState } from "react";

function App() {

  const [color, setNewColor] = useState('white');

  function changeColor() {
    setNewColor('black')
  };

  function backColor() {
    setNewColor(null)
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style = {{ backgroundColor: color }} onMouseOver = {changeColor}  onMouseOut = {backColor}> Submit </button>
    </div>
  );
}

export default App;

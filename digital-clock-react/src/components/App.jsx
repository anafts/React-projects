import React, { useEffect, useState } from "react";

function App() {
  
  const newTime = new Date().toLocaleTimeString('en-GB');
  const [time, setTime] = useState(newTime);

  function updateTime() {
    const now = new Date().toLocaleTimeString('en-GB');
    setTime(now);
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);


  return (
    <div className="container">
      <h1> {time} </h1>
      <button onClick={updateTime}> Get Time </button>
    </div>
  );
};

export default App;

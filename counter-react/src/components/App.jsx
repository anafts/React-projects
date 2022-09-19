import React , {useState} from "react";


function App() {
 
const [count, setCount] = useState(0) 



function getColor() {
  if (count > 0) {
    return 'green'
  } else if (count < 0) {
    return 'red';
  } else {
    return 'white'
  }
}

function increase() {
  setCount(count + 1) 
  
};


function decrease() {
 setCount(count - 1)
};

  return (
<div className="container">
    <h1 style={{ color: getColor() }} > {count} </h1>
    <button onClick = {() => { increase();}}>+</button>
    <button onClick = {() => { decrease(); }}>-</button>
  </div>
  );
};

export default App;

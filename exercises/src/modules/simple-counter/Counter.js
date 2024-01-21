import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <h1>This is a simple counter, let's try it!!</h1>
      <h1>{count}</h1>
      <div className="button-wrapper">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;

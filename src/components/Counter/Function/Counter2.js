import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  const [reset] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button
        onClick={() => {
          if (count <= 0) {
            setCount((count = 0));
          } else {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  );
}

export default Counter2;

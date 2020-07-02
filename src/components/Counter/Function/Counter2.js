import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  };
  const Min = () => {
    if (count < 1) {
      alert("Angka Tidak Boleh 0");
    } else {
      setCount(count - 1);
    }
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Plus}> + </button>
      <button onClick={Min}>-</button>
      <button onClick={Reset}> Reset </button>
    </div>
  );
}

export default Counter2;

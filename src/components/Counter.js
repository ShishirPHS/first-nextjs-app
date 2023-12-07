"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Counter: {counter}</p>
      <div className="flex flex-col space-x-4">
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

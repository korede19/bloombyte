import React, { useEffect, useState } from "react";

const Counter = ({ count, text }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < count) {
      const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [counter]);
  return (
    <div className="firstCount">
      <h1>{counter}</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default Counter;

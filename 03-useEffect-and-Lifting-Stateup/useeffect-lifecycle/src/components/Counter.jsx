import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          color: "red",
          width: "100px",
          border: "2px solid gray",
          borderRadius: "10px",
          backgroundColor: "pink",
          fontSize: "30px",
          margin: "20px",
        }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <h1 style={{ color: "azure" }}>{count}</h1>
      <button
        style={{
          color: "green",
          width: "100px",
          border: "2px solid gray",
          borderRadius: "10px",
          backgroundColor: "pink",
          fontSize: "30px",
          margin: "20px",
        }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

// ✅ Project 1: Live Stock Ticker (Real-time stock price updates)
// 🔹 Concepts Covered: JSX, Components, Props, useState
// 📝 Checklist:
// 🔲 Set up a React using vite
// 🔲 Use useState to store a stock price (const [price, setPrice] = useState(100))
// 🔲 Render JSX to display the stock price dynamically
// 🔲 Create a button to simulate stock price updates
// 🔲 Use an event handler (onClick) to update the price randomly
// 🔲 Pass stock price as a prop to a StockCard child component
// 🔲 Use conditional rendering to show "📈 Up" or "📉 Down" based on price change
import { useState } from "react";

function StockCard({ stockPrice, previousPrice }) {
  return (
    <div style={{ textAlign: "center", fontSize: "24px", margin: "20px" }}>
      <h2>Stock Price: ${stockPrice.toFixed(2)}</h2>
      {stockPrice > previousPrice ? (
        <h3 style={{ color: "green" }}>📈 Up</h3>
      ) : stockPrice < previousPrice ? (
        <h3 style={{ color: "red" }}>📉 Down</h3>
      ) : (
        <h3 style={{ color: "gray" }}>➖ No Change</h3>
      )}
    </div>
  );
}

function Button({ label, variant, size, onClick }) {
  const variantStyles = {
    primary: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
    },
    secondary: {
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
    },
  };

  const sizeStyles = {
    small: {
      padding: "5px 10px",
      fontSize: "12px",
    },
    medium: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    large: {
      padding: "12px 20px",
      fontSize: "16px",
    },
  };

  return (
    <button
      style={{ ...variantStyles[variant], ...sizeStyles[size], borderRadius: "5px", cursor: "pointer" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function App() {
  const [stockPrice, setStockPrice] = useState(100);
  const [previousPrice, setPreviousPrice] = useState(100);

  function updateStockPrice() {
    const newPrice = stockPrice + (Math.random() * 10 - 5);
    setPreviousPrice(stockPrice);
    setStockPrice(newPrice);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📊 Live Stock Ticker</h1>
      <StockCard stockPrice={stockPrice} previousPrice={previousPrice} />
      <Button variant="primary" size="large" onClick={updateStockPrice} label="Update Stock Price" />
    </div>
  );
}

export default App;



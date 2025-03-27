import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [place, setPlace] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setPlace(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <Header
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          maxWidth: "400px",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a place (e.g., London)"
          style={{
            backgroundColor: "#fff",
          }}
        />
        <Button
          onClick={handleSubmit}
          style={{
            borderRadius: "5px",
            backgroundColor: "#f7aef8",
            color: "#fff",
            textTransform: "none",
            padding: "8px 16px",
            height: "56px",
          }}
        >
          Submit
        </Button>
      </div>

      <Weather
        place={place}
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      />

      <Footer
        style={{
          fontSize: "14px",
          color: "#666",
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default App;

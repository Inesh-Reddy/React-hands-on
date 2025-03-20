import { useEffect, useState } from "react";
import { CryptoCard } from "./CryptoCard";
import { CardContainer } from "./CardContainer";

export default function Dashboard() {
  const [view, setView] = useState("list");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        const result = await response.json();
        setData(result);
        setError("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  let top10 = data.slice(0, 10);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3
        style={{
          fontSize: "24px",
          color: "#333",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Welcome to DeFi Dashboard
      </h3>

      {isLoading ? (
        <h1
          style={{
            fontSize: "28px",
            color: "#666",
            textAlign: "center",
          }}
        >
          Loading...
        </h1>
      ) : error ? (
        <div
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "18px",
            padding: "10px",
            border: "1px solid red",
            borderRadius: "5px",
          }}
        >
          Error: {error}
        </div>
      ) : (
        <div>
          {view === "list" ? (
            <CardContainer>
              {top10.map((item) => (
                <CryptoCard
                  key={item.id}
                  name={item.name}
                  price={item.current_price}
                  change={item.price_change_24h}
                />
              ))}
            </CardContainer>
          ) : (
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "5px",
                fontSize: "16px",
                overflowX: "auto",
              }}
            >
              {JSON.stringify(data)}
            </div>
          )}
        </div>
      )}

      <button
        style={{
          display: "block",
          width: "200px",
          height: "50px",
          margin: "20px auto",
          border: "1px solid grey",
          borderRadius: "5px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: view === "list" ? "#0B666A" : "#C30E59",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onClick={() => {
          setView(view === "list" ? "chart" : "list");
        }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor =
            view === "list" ? "#099195" : "#D61F6A")
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor =
            view === "list" ? "#0B666A" : "#C30E59")
        }
      >
        {view === "list" ? "Switch to Chart" : "Switch to List"}
      </button>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
          marginTop: "10px",
        }}
      >
        Here you will see real-time crypto data and manage your portfolio.
      </p>
    </div>
  );
}

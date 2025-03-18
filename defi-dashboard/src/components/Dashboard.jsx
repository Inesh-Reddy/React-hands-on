import { useEffect, useState } from "react";

export default function Dashboard() {
  const [view, setView] = useState("list");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let top10 = data.slice(0, 10);

  return (
    <div>
      <h3>Welcome to DeFi Dashboard.</h3> <br />
      <div>
        {view === "list" ? (
          <div>
            {top10.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        ) : (
          <div>{JSON.stringify(data)}</div>
        )}
      </div>
      <button
        style={{
          width: 200,
          height: 100,
          border: "grey 1px solid",
          borderRadius: "5px",
          fontSize: 20,
          backgroundColor: view === "list" ? "#0B666A" : "#C30E59",
        }}
        onClick={() => {
          setView(view === "list" ? "Chart" : "list");
        }}
      >
        {view}
      </button>
      <p>Here you will see real-time crypto data and manage your portfolio.</p>
    </div>
  );
}

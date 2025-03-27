import { useEffect, useState } from "react";

const Weather = (props) => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${props.place}`;

  useEffect(() => {
    if (!props.place) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        setTemperature(data.current.temp_c);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [props.place]);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        color: "#333",
      }}
    >
      {loading && "Loading weather..."}
      {error && `Error: ${error}`}
      {!loading && !error && temperature !== null
        ? `${props.place}: ${temperature}°C`
        : !loading && !error && !props.place
        ? "Enter a place to see the weather"
        : ""}
    </div>
  );
};

export default Weather;

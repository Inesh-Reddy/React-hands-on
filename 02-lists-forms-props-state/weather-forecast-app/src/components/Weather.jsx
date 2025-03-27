import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Weather = ({ place, onTemperatureChange, onConditionChange, style }) => {
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [displayText, setDisplayText] = useState("");

  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${place}`;

  useEffect(() => {
    if (!place) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      setDisplayText("");
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("FAILED TO FETCH WEATHER DATA");
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        setTemperature(data.current.temp_c);
        setCondition(data.current.condition.text);
        onTemperatureChange(data.current.temp_c);
        onConditionChange(data.current.condition.text);

        // Typewriter effect for the weather data
        const text = `${place.toUpperCase()}: ${
          data.current.temp_c
        }°C, ${data.current.condition.text.toUpperCase()}`;
        for (let i = 0; i <= text.length; i++) {
          setTimeout(() => {
            setDisplayText(text.slice(0, i));
          }, i * 50);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [place, onTemperatureChange, onConditionChange]);

  return (
    <div style={style}>
      {loading && "LOADING WEATHER..."}
      {error && `ERROR: ${error}`}
      {!loading && !error && temperature !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayText}
        </motion.div>
      ) : !loading && !error && !place ? (
        "ENTER A PLACE TO SEE THE WEATHER"
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;

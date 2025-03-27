import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Weather from "./components/Weather";

const MotionButton = motion(Button);

function App() {
  const [inputValue, setInputValue] = useState("");
  const [place, setPlace] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState(null);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setPlace(inputValue.trim());
      setInputValue("");
    }
  };

  const getWeatherIcon = () => {
    if (!condition) return null;
    const cond = condition.toLowerCase();
    if (cond.includes("sunny") || cond.includes("clear")) {
      return (
        <motion.div
          style={{
            width: "80px",
            height: "80px",
            background: "transparent",
            border: "2px solid #FFFFFF",
            borderRadius: "50%",
            position: "relative",
            margin: "0 auto",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "2px",
                height: "12px",
                background: "#FFFFFF",
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translate(40px)`,
                transformOrigin: "center",
              }}
            />
          ))}
        </motion.div>
      );
    } else if (cond.includes("rain") || cond.includes("drizzle")) {
      return (
        <motion.div
          style={{
            width: "60px",
            height: "60px",
            background: "transparent",
            border: "2px solid #FFFFFF",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            position: "relative",
            margin: "0 auto",
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            style={{
              position: "absolute",
              width: "2px",
              height: "10px",
              background: "#FFFFFF",
              transform: "rotate(45deg)",
              top: "20px",
              left: "20px",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "2px",
              height: "10px",
              background: "#FFFFFF",
              transform: "rotate(45deg)",
              top: "20px",
              left: "30px",
            }}
          />
        </motion.div>
      );
    } else if (cond.includes("snow") || cond.includes("sleet")) {
      return (
        <motion.div
          style={{
            width: "50px",
            height: "50px",
            background: "transparent",
            border: "2px solid #FFFFFF",
            clipPath:
              "polygon(50% 0%, 100% 29%, 79% 79%, 29% 100%, 0% 71%, 21% 21%)",
            position: "relative",
            margin: "0 auto",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <div
            style={{
              position: "absolute",
              width: "30px",
              height: "2px",
              background: "#FFFFFF",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(0deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "30px",
              height: "2px",
              background: "#FFFFFF",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(60deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "30px",
              height: "2px",
              background: "#FFFFFF",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(120deg)",
            }}
          />
        </motion.div>
      );
    } else {
      return (
        <motion.div
          style={{
            width: "80px",
            height: "50px",
            background: "transparent",
            position: "relative",
            margin: "0 auto",
          }}
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "2px solid #FFFFFF",
              borderRadius: "50%",
              top: "0",
              left: "0",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "2px solid #FFFFFF",
              borderRadius: "50%",
              top: "0",
              left: "20px",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "2px solid #FFFFFF",
              borderRadius: "50%",
              top: "10px",
              left: "10px",
            }}
          />
        </motion.div>
      );
    }
  };

  const getWeatherAtmosphere = () => {
    if (!condition) return null;
    const cond = condition.toLowerCase();
    if (cond.includes("sunny") || cond.includes("clear")) {
      return [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            background: "transparent",
            border: "1px solid #FFFFFF",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ));
    } else if (cond.includes("rain") || cond.includes("drizzle")) {
      return [...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "2px",
            height: "15px",
            background: "#FFFFFF",
            transform: "rotate(45deg)",
            top: "-20px",
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: ["-20px", "120vh"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
        />
      ));
    } else if (cond.includes("snow") || cond.includes("sleet")) {
      return [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            background: "transparent",
            border: "1px solid #FFFFFF",
            clipPath:
              "polygon(50% 0%, 100% 29%, 79% 79%, 29% 100%, 0% 71%, 21% 21%)",
            top: "-20px",
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: ["-20px", "120vh"], rotate: 360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ));
    } else {
      return [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            background: "transparent",
            border: "1px solid #FFFFFF",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1,
          }}
        />
      ));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "radial-gradient(circle, #060606, #060606, #070606, #070606, #070605, #1c1b1a, #2c2b2b, #3e3d3d, #696868, #979797, #c8c8c8, #fcfcfc)",
        fontFamily: "'Courier New', monospace",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "1px",
              height: "100px",
              background: "#FFFFFF",
              transform: "rotate(45deg)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{ rotate: 45 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
              background: "transparent",
              border: "1px solid #FFFFFF",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "0",
              height: "0",
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "20px solid #FFFFFF",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {getWeatherAtmosphere()}
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "1px",
            background: "#FFFFFF",
            top: "80px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "1px",
            background: "#FFFFFF",
            bottom: "60px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "1px",
            height: "100%",
            background: "#FFFFFF",
            left: "50%",
          }}
        />
      </div>

      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 40px",
          background: "transparent",
        }}
      >
        <h1
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#FFFFFF",
            letterSpacing: "2px",
          }}
        >
          WEATHER
        </h1>
      </header>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 140px)",
          padding: "40px",
          gap: "40px",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.5)",
            border: "1px solid #FFFFFF",
            padding: "40px",
            maxWidth: "400px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "36px",
              fontWeight: "bold",
              color: "#FFFFFF",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {condition ? condition : "WEATHER"}
          </h2>
          <div style={{ marginBottom: "20px" }}>{getWeatherIcon()}</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              marginBottom: "20px",
              fontSize: "16px",
              color: "#FFFFFF",
              fontWeight: "normal",
              letterSpacing: "1px",
            }}
          >
            <Weather
              place={place}
              onTemperatureChange={setTemperature}
              onConditionChange={setCondition}
              style={{
                fontSize: "16px",
                color: "#FFFFFF",
                fontWeight: "normal",
                letterSpacing: "1px",
              }}
            />
          </motion.div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              maxWidth: "300px",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <TextField
              variant="outlined"
              fullWidth
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="ENTER A PLACE (E.G., LONDON)"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "0",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "1px solid #FFFFFF",
                    borderRadius: "0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FFFFFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFFFFF",
                  },
                },
                "& .MuiInputBase-input": {
                  fontFamily: "'Courier New', monospace",
                  fontSize: "14px",
                  color: "#FFFFFF",
                  letterSpacing: "1px",
                },
              }}
            />
            <MotionButton
              onClick={handleSubmit}
              style={{
                borderRadius: "0",
                background: "#FFFFFF",
                color: "#000000",
                textTransform: "none",
                padding: "10px 20px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "'Courier New', monospace",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#CCCCCC" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Search /> SEARCH
            </MotionButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "400px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {condition ? (
            <motion.div
              style={{
                width: "150px",
                height: "150px",
                background: "transparent",
                border: "1px solid #FFFFFF",
                borderRadius: condition.toLowerCase().includes("sunny")
                  ? "50%"
                  : condition.toLowerCase().includes("rain")
                  ? "50%"
                  : condition.toLowerCase().includes("snow")
                  ? "50%"
                  : "0",
                clipPath: condition.toLowerCase().includes("rain")
                  ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                  : condition.toLowerCase().includes("snow")
                  ? "polygon(50% 0%, 100% 29%, 79% 79%, 29% 100%, 0% 71%, 21% 21%)"
                  : null,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {condition.toLowerCase().includes("sunny") && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        width: "2px",
                        height: "20px",
                        background: "#FFFFFF",
                        transform: `rotate(${i * 45}deg) translate(80px)`,
                        transformOrigin: "center",
                      }}
                    />
                  ))}
                </>
              )}
              {condition.toLowerCase().includes("rain") && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      width: "2px",
                      height: "20px",
                      background: "#FFFFFF",
                      transform: "rotate(45deg)",
                      top: "40px",
                      left: "40px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "2px",
                      height: "20px",
                      background: "#FFFFFF",
                      transform: "rotate(45deg)",
                      top: "40px",
                      left: "60px",
                    }}
                  />
                </>
              )}
              {condition.toLowerCase().includes("snow") && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "2px",
                      background: "#FFFFFF",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) rotate(0deg)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "2px",
                      background: "#FFFFFF",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) rotate(60deg)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "2px",
                      background: "#FFFFFF",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) rotate(120deg)",
                    }}
                  />
                </>
              )}
              {condition.toLowerCase().includes("cloudy") && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      background: "transparent",
                      border: "2px solid #FFFFFF",
                      borderRadius: "50%",
                      top: "20px",
                      left: "20px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      background: "transparent",
                      border: "2px solid #FFFFFF",
                      borderRadius: "50%",
                      top: "20px",
                      left: "60px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      background: "transparent",
                      border: "2px solid #FFFFFF",
                      borderRadius: "50%",
                      top: "40px",
                      left: "40px",
                    }}
                  />
                </>
              )}
            </motion.div>
          ) : (
            <div
              style={{
                width: "150px",
                height: "150px",
                background: "transparent",
                border: "1px solid #FFFFFF",
                borderRadius: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "normal",
                letterSpacing: "1px",
                textAlign: "center",
              }}
            >
              AWAITING WEATHER DATA
            </div>
          )}
        </motion.div>

        {condition && (
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "75%",
              transform: "translate(-50%, -50%)",
              width: "200px",
              height: "200px",
              opacity: 0.15,
              zIndex: 0,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {condition.toLowerCase().includes("sunny") && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "2px",
                      height: "30px",
                      background: "#FFFFFF",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 30}deg) translate(100px)`,
                      transformOrigin: "center",
                    }}
                  />
                ))}
              </div>
            )}
            {condition.toLowerCase().includes("rain") && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  position: "relative",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "0",
                      height: "0",
                      borderLeft: "20px solid transparent",
                      borderRight: "20px solid transparent",
                      borderBottom: "40px solid #FFFFFF",
                      top: `${i * 40}px`,
                      left: `${i * 30}px`,
                      opacity: 0.3,
                    }}
                  />
                ))}
              </div>
            )}
            {condition.toLowerCase().includes("snow") && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  position: "relative",
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      background: "transparent",
                      border: "2px solid #FFFFFF",
                      clipPath:
                        "polygon(50% 0%, 100% 29%, 79% 79%, 29% 100%, 0% 71%, 21% 21%)",
                      top: `${i * 60}px`,
                      left: `${i * 40}px`,
                      opacity: 0.3,
                    }}
                  />
                ))}
              </div>
            )}
            {condition.toLowerCase().includes("cloudy") && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "transparent",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50%",
                    top: "20px",
                    left: "20px",
                    opacity: 0.3,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "transparent",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50%",
                    top: "20px",
                    left: "80px",
                    opacity: 0.3,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "transparent",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50%",
                    top: "60px",
                    left: "50px",
                    opacity: 0.3,
                  }}
                />
              </div>
            )}
          </motion.div>
        )}
      </main>

      <Footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "transparent",
          fontSize: "14px",
          color: "#FFFFFF",
          fontWeight: "normal",
          letterSpacing: "1px",
        }}
      />
    </div>
  );
}

export default App;

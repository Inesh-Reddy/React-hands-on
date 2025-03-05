// Beginner: Mood Toggle
// Goal: Create a component that toggles between "Happy" and "Sad".

import { useState } from "react"

// Requirements:
// Use JSX to show the current mood.
// Build a MoodToggle component.
// Use useState to track mood (e.g., const [mood, setMood] = useState("Happy")).
// Add a button to switch moods.
// Pass the mood as a prop to a MoodDisplay child component.
// Real-World Use: Toggling UI states (e.g., on/off switches).
// Stretch: Add a third mood (e.g., "Neutral").

function MoodToggle({ mood, setMood }) {
  const parentStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "100vw",
    flexDirection: "column",
  };

  const buttonStyles = {
    backgroundColor: "black",
    color: "white",
    height: 60,
    width: 200,
    borderRadius: 20,
    border: "2px solid white",
    fontSize: "18px",
    margin: "10px",
  };

  const toggleMood = () => {
    if (mood === "Happy") {
      setMood("Sad");
    } else if (mood === "Sad") {
      setMood("Neutral");
    } else {
      setMood("Happy");
    }
  };

  return (
    <div style={parentStyles}>
      <button style={buttonStyles} onClick={toggleMood}>Switch Mood</button>
    </div>
  );
}

function MoodDisplay({ mood }) {
  return (
    <div style={{ textAlign: "center", fontSize: "24px", marginTop: "20px" }}>
      <h1>Current Mood: {mood}</h1>
    </div>
  );
}


function App() {
  const [mood, setMood] = useState("Happy");

  return (
    <div>
      <MoodToggle mood={mood} setMood={setMood} />
      <MoodDisplay mood={mood} />
    </div>
  );
}

export default App;


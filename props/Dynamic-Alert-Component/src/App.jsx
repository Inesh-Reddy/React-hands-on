// Challenge 2: Dynamic Alert Component
// 📌 Scenario: Your app needs a reusable alert system. Create an AlertBox that accepts the following props:
// ✅ Props: message, type (success, error, warning), and dismissible.
// ✅ Bonus: Style the alert differently based on type and allow it to close when dismissible is true.

import { useState } from "react";

function AlertBox({ message, type, dismissible }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const styles = {
    success: { backgroundColor: "lightgreen", color: "green", padding: "10px", borderRadius: "5px" },
    warning: { backgroundColor: "yellow", color: "orange", padding: "10px", borderRadius: "5px" },
    error: { backgroundColor: "lightcoral", color: "red", padding: "10px", borderRadius: "5px" },
  };

  return (
    <div style={styles[type]}>
      <p>{message}</p>
      {dismissible && <button onClick={() => setVisible(false)}>Dismiss</button>}
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <AlertBox message="Successful" type="success" dismissible={true} />
      <AlertBox message="Warning" type="warning" dismissible={true} />
      <AlertBox message="Error" type="error" dismissible={false} />
    </div>
  );
}

export default App;


import Counter from "./components/counter";
import "./App.css";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "black",
        borderRadius: "10px",
        margin: "0px",
      }}
    >
      <Counter />
    </div>
  );
}

export default App;

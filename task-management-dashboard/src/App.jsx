import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskItem from "./components/TaskItem";
import ErrorBoundary from "./components/ErrorBoundary";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const initialTasks = [
      { id: Date.now() - 1, title: "Initial Task", isCompleted: false },
    ];
    setTasks(initialTasks);

    return () => {
      console.log("Cleanup: Unmounting App");
    };
  }, []);

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f9",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Task Manager</h1>
      <ErrorBoundary>
        <AddTaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} status={filter} />
        <div
          style={{
            display: "flex",
            margin: "1rem",
            padding: "0.5rem",
            justifyContent: "space-around",
            width: "300px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <button
            onClick={() => handleFilterChange("all")}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("completed")}
            style={{
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Completed
          </button>
          <button
            onClick={() => handleFilterChange("pending")}
            style={{
              padding: "10px",
              backgroundColor: "#ffc107",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Pending
          </button>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;

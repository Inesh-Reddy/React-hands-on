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
    <div className="app-container">
      <h1>Task Manager</h1>
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
          }}
        >
          <button onClick={() => handleFilterChange("all")}>all</button>
          <button onClick={() => handleFilterChange("completed")}>
            completed
          </button>
          <button onClick={() => handleFilterChange("pending")}>pending</button>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;

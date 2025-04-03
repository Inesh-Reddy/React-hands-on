import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <ul>
        {tasks.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

import { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState({
    id: Date.now(),
    title: "",
    isCompleted: false,
  });

  const onChangeHandler = (e) => {
    setNewTask((prevTask) => ({
      ...prevTask,
      title: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (newTask.title.trim()) {
      onAddTask(newTask);
      setNewTask((prevTask) => ({
        ...prevTask,
        title: "",
        id: Date.now(),
      }));
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f4f4f9",
        borderRadius: "8px",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input
        type="text"
        value={newTask.title}
        onChange={onChangeHandler}
        placeholder="Please input task"
        aria-label="New task input"
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
      <button
        type="submit"
        disabled={!newTask.title.trim()}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;

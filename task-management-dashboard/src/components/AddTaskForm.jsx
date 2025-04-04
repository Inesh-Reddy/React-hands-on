import { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState({
    id: Date.now(),
    title: "",
    isCompleted: true,
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
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={newTask.title}
          onChange={onChangeHandler}
          placeholder="Please input task"
          aria-label="New task input"
        />
        <button type="submit" disabled={!newTask.title.trim()}>
          Add Task
        </button>
      </form>
    </>
  );
};

export default AddTaskForm;

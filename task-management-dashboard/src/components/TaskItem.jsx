import { Fragment } from "react";

const TaskItem = ({ task }) => {
  return (
    <Fragment>
      <li
        style={{
          color: task.isCompleted ? "green" : "red",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          backgroundColor: task.isCompleted ? "#d4edda" : "#f8d7da",
          listStyle: "none",
          fontSize: "18px",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        Task: {task.title} -{" "}
        {task.isCompleted ? (
          <span style={{ fontWeight: "bold" }}>Completed</span>
        ) : (
          <span style={{ fontWeight: "bold" }}>Pending</span>
        )}
      </li>
    </Fragment>
  );
};

export default TaskItem;

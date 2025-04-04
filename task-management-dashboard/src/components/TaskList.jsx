import { Fragment } from "react";

const TaskList = ({ tasks, status }) => {
  let filteredTasks = tasks;
  if (status === "completed") {
    filteredTasks = tasks.filter((task) => task.isCompleted);
  } else if (status === "pending") {
    filteredTasks = tasks.filter((task) => !task.isCompleted);
  }

  return (
    <Fragment>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          maxWidth: "600px",
          margin: "auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              style={{
                padding: "10px",
                marginBottom: "8px",
                borderRadius: "5px",
                backgroundColor: task.isCompleted ? "#d4edda" : "#f8d7da",
                color: task.isCompleted ? "green" : "red",
                fontSize: "18px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                Task: {task.title} -{" "}
                {task.isCompleted ? "Completed" : "Pending"}
              </span>
            </li>
          ))
        ) : (
          <li
            style={{
              padding: "10px",
              backgroundColor: "#f1f1f1",
              color: "#555",
              textAlign: "center",
              fontSize: "18px",
              borderRadius: "5px",
            }}
          >
            No tasks available
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default TaskList;

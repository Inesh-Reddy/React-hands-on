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
      <ul className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              style={{ color: task.isCompleted ? "green" : "red" }}
            >
              Task: {task.title} - {task.isCompleted ? "Completed" : "Pending"}
            </li>
          ))
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </Fragment>
  );
};

export default TaskList;

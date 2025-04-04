import { Fragment } from "react";

const TaskItem = ({ task }) => {
  return (
    <Fragment>
      <li style={{ color: task.isCompleted ? "green" : "red" }}>
        Task : {task.title} - {task.isCompleted ? "Completed" : "Pending"}
      </li>
    </Fragment>
  );
};

export default TaskItem;

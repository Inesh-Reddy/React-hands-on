import Checkbox from "@mui/material/Checkbox";

import "./todo-item.css";

const TodoItem = (props) => {
  return (
    <li className="todo-item-container">
      <Checkbox
        checked={props.checked}
        onChange={(e) => props.onToggle(e.target.checked)}
      />
      <h1
        style={{ textDecoration: props.checked ? "line-through" : undefined }}
      >
        {props.content}
      </h1>
    </li>
  );
};

export default TodoItem;

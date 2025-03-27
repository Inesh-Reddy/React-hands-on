import "./App.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TodoItem from "./components/todo-item";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleCreateButton = () => {
    const newArr = [
      ...todos,
      {
        id: Date.now().toString(),
        todo: todoText,
        isCompleted: false,
      },
    ];
    setTodos(newArr);
    setTodoText("");
  };
  console.log("todos:", todos);

  return (
    <div className="container">
      <div className="todo-container">
        <div>
          <TextField
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
            fullWidth
            variant="filled"
            placeholder="Enter your Todo here"
          ></TextField>
          <br />
          <br />
          <Button
            onClick={handleCreateButton}
            style={{ backgroundColor: "bisque" }}
          >
            Create
          </Button>
          <div>
            {todos.map((e, index) => {
              return (
                <TodoItem
                  onToggle={(check) => {
                    const newArr = [...todos];
                    newArr[index].isCompleted = check;
                    setTodos(newArr);
                  }}
                  checked={e.isCompleted}
                  key={e.id}
                  content={e.todo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

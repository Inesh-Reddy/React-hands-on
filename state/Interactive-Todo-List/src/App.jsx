// Advanced: Todo List Tracker
// Goal: Build a component to add and display todos.
// Requirements:
// Use JSX to show a form and list of todos.
// Create a TodoApp component with a TodoItem child component.
// Use useState to manage an array of todos (e.g., const [todos, setTodos] = useState([])).
// Add an input and button to append new todos to the array.
// Pass each todo as a prop to TodoItem for rendering.
// Real-World Use: Task management tools (e.g., Jira, Trello).
// Stretch: Add a button to mark a todo as complete (toggle a boolean).
import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  }

  function toggleComplete(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>✅ Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ padding: 0 }}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, toggleComplete }) {
  return (
    <li
      onClick={() => toggleComplete(todo.id)}
      style={{
        listStyle: "none",
        padding: "8px",
        margin: "5px",
        background: "#f3f3f3",
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "none"
      }}
    >
      {todo.text}
    </li>
  );
}

function App() {
  return <TodoApp />;
}

export default App;

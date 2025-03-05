// Pro-Level: Shopping Cart
// Goal: Simulate a cart where users can add items and see the total.

import { useState } from "react";

// Requirements:
// Use JSX to display a list of items and a total.
// Create a Cart component with an Item child component.
// Use useState to track an array of items (e.g., { name, price }) and a total.
// Add a form to input item name and price, updating state on submit.
// Pass each item as a prop to Item; calculate and display the total dynamically.


function Cart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });

  function addItem() {
    setItems([...items, {...newItem, price: parseFloat(newItem.price) }]);
    setNewItem({ name: "", price: "" });
  }

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
      <h2>Shopping Cart 🛒</h2>
      
      <input 
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Item Name"
        style={{ padding: "5px", margin: "5px" }}
      />
      <input 
        type="number"
        value={newItem.price}
        onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        placeholder="Item Price"
        style={{ padding: "5px", margin: "5px" }}
      /> <br></br>
      <button onClick={addItem} style={{ padding: "5px 10px", cursor: "pointer" }}>Add</button>

      <ul style={{ listStyle: "none", padding: "0", marginTop: "20px" }}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>

      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

function Item({ item }) {
  return (
    <li style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
      {item.name} - ₹{item.price.toFixed(2)}
    </li>
  );
}

function App() {
  return (
    <div>
      <Cart />
    </div>
  );
}

export default App;




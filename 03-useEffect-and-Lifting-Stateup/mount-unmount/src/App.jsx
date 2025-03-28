import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <button onClick={() => setFlag(!flag)} >Toggle</button>
      { flag ? <Counter /> : <p>Counter Removed</p> }
    </div>
  )
}

export default App

import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const INCREMENT = () => {
    setCount(count + 1)
  };

  const DECREMENT = () => {
    setCount(count - 1)
  };

  const RESET = () => {
    setCount(0)
  };
  return (
    <div>
      <button onClick={INCREMENT}>いいね！</button>
      <button onClick={DECREMENT}>よくないね！</button>
      <button onClick={RESET}>reset</button>
      {count}
    </div>
  );
};

export default App;

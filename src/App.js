import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('');

  const handleClick = () => {
    setState('Hello world')
    window.confirm('Hello world')
  };
  return (
    <div>
      <button onClick={handleClick}>button</button>
      {state}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('');

  const handleClick = () => {
    setState('Helloworld')
  };
  return (
    <div>
      <button onClick={handleClick}>button</button>
      {state}
    </div>
  );
};

export default App;

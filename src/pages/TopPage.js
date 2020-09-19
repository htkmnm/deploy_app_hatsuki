import React, { useState } from 'react';
import './pages.css';
// import reducer from '../reducers/index'
// import { CLICK_EVENT } from '../actions/index';

function TopPage() {
  // const [state, dispatch] = useReducer(reducer, []);
  const [user, setUser] = useState('');
  const [cpu, setCpu] = useState('');

  const random = () => {
    let nam = Math.floor(Math.random() * 3)
    if (nam === 0) {
      setCpu('ぐー')
    } else if (nam === 1) {
      setCpu('ちょき')
    } else if (nam === 2) {
      setCpu('ぱー')
    }
  }

  const rock = () => {
    setUser('ぐー')
    setCpu(random)
  };

  const scissors = () => {
    setUser('ちょき')
    setCpu(random)
  };

  const paper = () => {
    setUser('ぱー')
    setCpu(random)
  };

  return (
    <div>
      <button onClick={rock}>ぐー</button>
      <button onClick={scissors}>ちょき</button>
      <button onClick={paper}>ぱー</button>
      <p>あなたの手:{user}</p>
      <p>cpuの手:{cpu}</p>
    </div>
  );
};

export default TopPage;

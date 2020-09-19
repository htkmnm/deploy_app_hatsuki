import React, { useState, useEffect } from 'react';
import './pages.css';
// import reducer from '../reducers/index'
// import { CLICK_EVENT } from '../actions/index';

function TopPage() {
  // const [state, dispatch] = useReducer(reducer, []);
  const [user, setUser] = useState('');
  const [cpu, setCpu] = useState('');
  const [result, setResult] = useState('判定中');
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      judge()
    },
    [count]
  );


  const cpuHand = () => {
    let nam = Math.floor(Math.random() * 3)
    if (nam === 0) {
      setCpu('ぐー')
    } else if (nam === 1) {
      setCpu('ちょき')
    } else if (nam === 2) {
      setCpu('ぱー')
    }
    setCount(prev => prev + 1)
  };

  const rock = () => {
    setUser('ぐー')
    cpuHand()
  };

  const scissors = () => {
    setUser('ちょき')
    cpuHand()
  };

  const paper = () => {
    setUser('ぱー')
    cpuHand()
  };

  const judge = () => {
    if (user !== '') {
      if (user === cpu) {
        setResult('あいこです。')
      } else if (user === 'ぐー' && cpu === 'ちょき') {
        setResult('あなたの勝ちです！')
      } else if (user === 'ぐー' && cpu === 'ぱー') {
        setResult('あなたの負けです！')
      } else if (user === 'ちょき' && cpu === 'ぱー') {
        setResult('あなたの勝ちです！')
      } else if (user === 'ちょき' && cpu === 'ぐー') {
        setResult('あなたの負けです！')
      } else if (user === 'ぱー' && cpu === 'ぐー') {
        setResult('あなたの勝ちです！')
      } else if (user === 'ぱー' && cpu === 'ちょき') {
        setResult('あなたの負けです！')
      }
    }
  };

  return (
    <div>
      <button onClick={rock}>ぐー</button>
      <button onClick={scissors}>ちょき</button>
      <button onClick={paper}>ぱー</button>
      <p>あなたの手:{user}</p>
      <p>cpuの手:{cpu}</p>
      <p>勝敗:{result}</p>
    </div>
  );
};

export default TopPage;

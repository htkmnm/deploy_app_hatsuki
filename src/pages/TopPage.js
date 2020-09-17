import React, { useState } from 'react';
import './pages.css';
// import reducer from '../reducers/index'
// import { CLICK_EVENT } from '../actions/index';

function TopPage() {
  // const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('')

  const handleClick = () => {
    const errorText = 'なにか文字を入力してください。'
    // e.preventDefault();
    // dispatch({
    // type: CLICK_EVENT
    // });
    if (text === '') {
      return setError(errorText)
    } else {
    } return setValue(text)
  };

  return (
    <div>
      <input
        tyoe="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>hello</button>
      {value}
      <p className='error'>{error}</p>
    </div>
  );
};

export default TopPage;

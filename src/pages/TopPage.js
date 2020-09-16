import React, { useState, useReducer } from 'react';
import reducer from '../reducers/index'
import { CLICK_EVENT } from '../actions/index';

function TopPage() {
  const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: CLICK_EVENT
    });
    setValue(text);
    console.log(text);
  };

  return (
    <div>
      <input
        tyoe="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}> hello</button>
      {value}
    </div>
  );
};

export default TopPage;

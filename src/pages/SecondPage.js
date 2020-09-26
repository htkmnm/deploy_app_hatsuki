import React from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => {
    return (
        <div>
            <h1>SecondPage</h1>
            <Link to='/'>TopPageへ移動</Link>
        </div>
    );
};

export default SecondPage;

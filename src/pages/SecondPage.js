import React, { useParams } from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => {
    const { hello } = useParams();

    return (
        <div>
            <h1>SecondPage</h1>
            <Link to='/'>TopPageへ移動</Link>
            {hello}
        </div>
    );
};

export default SecondPage;

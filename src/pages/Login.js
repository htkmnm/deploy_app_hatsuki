import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from '../config/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleClick = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/main')
                console.log('success login');
            })
    };

    return (
        <div>
            <h1>Login</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>Login</Button><br />
            <Link to='createUser'>アカウント作成</Link>
        </div>
    );
};

export default Login;

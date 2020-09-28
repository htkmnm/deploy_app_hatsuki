import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from '../config/firebase';

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleClick = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
                console.log('success createUser');
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                // ...
                if (errorCode === 'auth/weak-password') {
                    alert('8桁以上で設定してください。');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('入力してください。');
                } else if (errorCode === 'auth/email-already-in-use') {
                    alert('同じアカウントが存在します。');
                } else if (errorCode === 'operation-not-allowed') {
                    alert('無効です。')
                }
                console.log(error);
            });
    };

    return (
        <div>
            <h1>CreateUser</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>Create</Button><br />
            <Link to='/'>戻る</Link>
        </div>
    );
};

export default CreateUser;
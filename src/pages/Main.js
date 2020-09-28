import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase';

const Main = () => {
    const history = useHistory()
    const handleClick = () => {
        firebase.auth().signOut()
            .then(function () {
                history.push('/');
                alert('ログアウトしました。')
                console.log('success logout')
                // Sign-out successful.
            })
    };

    return (
        <div>
            <h1>Main</h1>
            <Button variant="outlined" onClick={handleClick}>ログアウト</Button>
        </div>
    );
};

export default Main;
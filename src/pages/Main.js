import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase';
import TextField from '@material-ui/core/TextField';
import { mydataCreate, createData, readData, updateData, deleteData } from '../config/firebase';

const Main = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [born, setBorn] = useState('');

    const handlemydataCreate = async () => {
        await mydataCreate(first, last, born);
    };
    const handleCreate = async () => {
        await createData();
    };
    const handleRead = async () => {
        await readData();
    };
    const handleUpdatedata = async () => {
        await updateData();
    };
    const handleDeletedata = async () => {
        await deleteData();
    };
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
            <TextField id="first" label="first" value={first} onChange={e => setFirst(e.target.value)} />
            <TextField id="last" label="last" value={last} onChange={e => setLast(e.target.value)} />
            <TextField id="born" label="born" value={born} onChange={e => setBorn(e.target.value)} /><br />
            <Button variant="outlined" onClick={handlemydataCreate}>MY DATA CREATE</Button>
            <Button variant="outlined" onClick={handleCreate}>CREATE</Button>
            <Button variant="outlined" onClick={handleRead}>READ</Button>
            <Button variant="outlined" onClick={handleUpdatedata}>UPDATE</Button>
            <Button variant="outlined" onClick={handleDeletedata}>DELETE</Button><br />
            <Button variant="outlined" onClick={handleClick}>ログアウト</Button>
        </div>
    );
};

export default Main;
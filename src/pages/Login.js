import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Login = () => {
    // const [loginButton, setLoginButton] = useState('');
    // setLoginButton()
    return (
        <div>
            <p>email</p>
            <input type="text" />
            <p>password</p>
            <input type="text" /><br /><br />
            <Link to='/main'><Button variant="contained" color="primary">LOGIN</Button></Link><br />
            <Link to='/createuser'>アカウント作成</Link>
        </div>
    )
}

export default Login

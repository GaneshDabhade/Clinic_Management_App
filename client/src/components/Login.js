import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button,TextField, Typography } from '@mui/material';
import '../css/Login.css';
import LoginSuccess from './Notifications/LoginSuccess';

const LoginForm = () => {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleChange(event){
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(event){
        event.preventDefault();
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
        console.log("FormData from client: ", formData);
        login(formData);
    }

    // Call Login API.
    async function login(formData){
        const resp = await axios.post('http://localhost:5000/login', formData);
        console.log(resp.data);
        if(resp.data.Success === true){
            const jwt = resp.data.token;
            localStorage.setItem("JWT", jwt);
            navigate('/home');
        }
    };

return(
    <>
        <form onSubmit={handleSubmit} className='LoginForm'>
        <Paper elevation={20} className='loginFormContainer'>
            <div className='loginIcon'>
                <PersonIcon fontSize='medium' color='primary'  />
                <h1>Login</h1>
            </div>
            <div className='loginFields'>
                <TextField label='Email Address' name='email' value={formData.email} onChange={handleChange} type='text'></TextField>
                <TextField label='Password' name='password' value={formData.password} onChange={handleChange} type='password'></TextField>
                <Button type='submit' variant='contained' onClick={handleSubmit}>Login</Button>
            </div>
            <div className='loginRegister'>
                <a href='/ForgetPass'><Typography variant='body2'>Forgot Password</Typography></a>
                <label>Don't have an accout? <Link to='/register'>Register Now</Link> </label>
            </div>
        </Paper>
    </form>
    <LoginSuccess />
    </>
    )
}

export default LoginForm;
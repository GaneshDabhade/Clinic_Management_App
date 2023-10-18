import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Home from "./Home";

const RegisterForm = ()=>{
    const [status, setStatus] = useState(false);

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleClick = (event)=>{
        event.preventDefault();
        register(formData);
        console.log(formData)
    }

    const register = async (formData)=>{
        console.log("Calling create new user API");
        const registerResp = await axios.post('http://localhost:5000/users/register', formData)
        .catch(function(error){
            console.log("Server Errors observed while creating new User: ", error.response);
        });
        console.log("User Register status: ", registerResp.data);
        setStatus(true);
    }

    return(
    <>
        {!status ? (
            <form >
            <Paper elevation={10} className="registerationForm">
            <h1>Create New Accout</h1>
            <TextField name="username" type="username" value={formData.username} label="Username" onChange={handleChange}></TextField>
            <TextField name="email" type="email" value={formData.email} label="Email" onChange={handleChange}></TextField>
            <TextField name="password" type="password" value={formData.password} label="Password" onChange={handleChange}></TextField>
            <Button type="submit" variant="contained" onClick={handleClick}>Register</Button>
            <label>Already have an accout? <Link to="/users/login">Sign In</Link> </label>
            </Paper>
        </form>
        ):(<Home />)}
    </>
    )
}

export default RegisterForm;

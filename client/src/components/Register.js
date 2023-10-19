import { Button, FormControlLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = ()=>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        Mobile:'',
        userType:'Patient'
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
        const registerResp = await axios.post('http://localhost:5000/register', formData);
        console.log(registerResp.data);
        if(registerResp.data.Success === true){
            const jwt = registerResp.data.token;
            localStorage.setItem("JWT", jwt);
            navigate('/home');
        }
    }

    return(
    <>
        <form>
            <Paper elevation={10} className="registerationForm">
                <h1 style={{display: "flex", justifyContent: "center"}}>Create New Accout</h1>
                <RadioGroup name="userType" value={formData.userType} onChange={handleChange} style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <FormControlLabel value={"Doctor"} control={<Radio />} label="Doctor" />
                    <FormControlLabel value={"Patient"} control={<Radio />} label="Patient" />
                </RadioGroup>
                <TextField name="username" type="username" value={formData.username} label="Username" onChange={handleChange}></TextField>
                <TextField name="email" type="email" value={formData.email} label="Email" onChange={handleChange}></TextField>
                <TextField name="Mobile" type="Mobile" value={formData.Mobile} label="Mobile" onChange={handleChange}></TextField>
                <TextField name="password" type="password" value={formData.password} label="Password" onChange={handleChange}></TextField>
                <Button type="submit" variant="contained" onClick={handleClick}>Register</Button>
                <label>Already have an accout? <Link to="/users/login">Sign In</Link> </label>
            </Paper>
        </form>
    </>
    )
}

export default RegisterForm;

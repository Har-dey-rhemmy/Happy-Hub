// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../login-assets/Logo.svg'
import { Link } from "react-router-dom";
import "../login-styles/App.css"
import { useState } from 'react';
import { registerUser } from '../api';
import axios from '../main';

function Signup() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
  };
  
  const handleSubmit = async(event) => {
    event.preventDefault();
  
    try {
        const response = await axios.post('/api/register', formData);
        console.log('Registration success:', response.data);
    } catch (error) {
        console.error('Registration error:', error);
    }
  };
  
  return (
    <div className = 'signup'>
      <div className = 'sign-up-container'>
        <img src = { logo }
        className = "app-logo"
        alt = "logo"/>
        <h1 className = 'hidden' > Happyhub </h1> 
        <h1 className = 'signup-header' > Sign Up </h1>   
        <form onSubmit={handleSubmit} className = 'sign-up-form'>
        <input placeholder = 'Email'
        type = 'email'
        name = 'email'
        className = 'mail'
        value={formData.email}
        onChange={handleInputChange}> </input>   
        <input placeholder = 'Username'
        type = 'text'
        name = 'name'
        className = 'username'
        value={formData.username}
        onChange={handleInputChange}> </input>
        <input placeholder = 'Create Password'
        type = 'password'
        name = "password"
        className = 'pass'
        value={formData.password}
        onChange={handleInputChange}> </input>   
        <input placeholder = 'Confirm Password'
        type = 'password'
        name = "password"
        className = 'passconfirm'
        value={formData.password}
        onChange={handleInputChange}> </input>   
        <button className = 'continue-btn' > < Link to = '/Info' className = 'decor'> Continue </Link></button >
        </form>   
      </div>   
   </div> 
  );
};
    

export default Signup


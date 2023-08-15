import '../login-styles/App.css'
import logo from '../login-assets/Logo.svg'
import { Link } from "react-router-dom";
import { loginUser, getToken } from '../store/auth';
import { useState } from 'react';
import axios from '../main';
import { toFormData } from 'axios';



function Signin() {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', formData);
      console.log('Login success:', response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
};
  

  return (
    <div className='App'>
      <div className='form-container'>
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className='hidden'>Happyhub</h1>
        <h1 className='login-header'>Login</h1>
        <form>
          <input onChange={handleInputChange} text={toFormData.email} placeholder='Email' type='email' name='email' className='mail'></input>
          <input onChange={handleInputChange} value={toFormData.password} placeholder='Password' type='password' name="password" className='pass'></input>
          <button className='forgot-btn'>Forgot Password?</button>
          <button className='sign-in-btn'><Link to="/Signup" className='decor'>Sign In</Link></button>
          <h4 className='sign-up'>Don&apos;t have an Account?<button><Link to="/Signup" className='decor'>Sign Up For Free</Link></button></h4>
        </form>
      </div>
    </div>
  )
}

export default Signin

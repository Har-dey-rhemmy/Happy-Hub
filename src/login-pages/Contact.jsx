// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../login-assets/Logo.svg'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from '../main';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    Number: ''
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
        console.log('We Got That:', response.data);
    } catch (error) {
      console.error('Try again:', error);
    }
  };

  return (
    <div className = 'contact'>
      <div className = 'contact-container'>
        <img src = { logo } className = "app-logo" alt = "logo"/>
        <h1 className = 'hidden'> Happyhub </h1> 
        <h1 className = 'contact-header'> Emergency Contacts </h1> 
        <h3> Please provide contact details incase of emergencies </h3> 
        <form className = 'contact-form'>
          <label htmlFor = "contact-one-email" className = 'label-1'> Contact 1 </label> 
          <input placeholder = 'Email' type = 'email' id = "contact-one-email" name = 'email' className = 'contact-one-mail' value = { formData.email } onChange = { handleInputChange } > </input> 
          <input placeholder = 'Phone Number' type = 'text' name = 'number' className = 'phone-number-one' value = { formData.Number } onChange = { handleInputChange }> </input> 
          <label htmlFor = "contact-two-email" className = 'label-2' > Contact 2 </label> 
          <input placeholder = 'Email' type = 'email' id = "contact-two-email" name = 'email' className = 'contact-two-mail' value = { formData.email } onChange = { handleInputChange }> </input> 
          <input placeholder = 'Phone Number' type = 'text' name = 'number' className = 'phone-number-two' value = { formData.Number } onChange = { handleInputChange }> </input> 
          <button className = 'finish'> <Link to = "/Aichat" className = 'contact-link'> Finish </Link></button >
        </form> 
      </div> 
    </div>
  );
};

export default Contact
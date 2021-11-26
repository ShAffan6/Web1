import React, { useState } from 'react';
import './Form.css';
import Signup from './signup';
import Signupsuccess from './Signupsuccess'
import './signup.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
            <img className='form-img' src='img/Titanic_Fitness_Logo.PNG' alt='Logo' />
          </div>
          {!isSubmitted ? (
            <Signup submitForm={submitForm} />
          ) : (
            <Signupsuccess />
          )}
        </div>
      </>
    );
  };
  
  export default Form;
import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Registration from '../Services/Authentication/Registration';
import { Navigate, useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import '../cssFiles/loginSignInPage.css'
import { SignInTagsSelector } from './SignInTagsDescriptionSelector';
import { PassThrough } from 'stream';

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};







type Props = {
    handleClikc : () => void; 
};


const SignIn = ({handleClikc} : Props) => {
    const [response, setResponse] = useState();
    const [formData, setFormData] = useState({
        username : "",
        email : "",
        password : "" 
    })
    
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate(); 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [nextStep, setNextStep] = useState(false);
    const [message, setMessage] = useState("")
    
    const handleSubmit = async() => {
        if(formData.username  !== "" && formData.email !== "" && formData.password !== ""){
          setNextStep(true);
        }
        else{
          setIsError(true)
        }
    }

    return(
      nextStep ? <SignInTagsSelector 
        username={formData.username}
        email = {formData.email}
        password = {formData.password}
      /> :
        <div className='centerBox'>
          <header className='headerLogIn'>
              Sign in
          </header>
          <main>
          <label htmlFor="username">
              Username:
            </label>
            <input 
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required
              className={`${isError && formData.username === '' && "inputError" }`}
            
              value={formData.username}
              onChange={(e) => {
                  setFormData({username:e.target.value,
                    email : formData.email,
                    password : formData.password
                  });
                  setIsError(false); 
              }}
            
            />
           
            <label htmlFor="email">
              Email:
            </label>
            <input 
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              className={`${isError && formData.email === '' && "inputError" }`}
              
              value={formData.email}
              onChange={(e) => {
                setFormData({username:formData.username,
                  email : e.target.value,
                  password : formData.password
                });
                  setIsError(false); 
              }}
            
            />
           
            <label htmlFor="password">
              Password:
            </label>
            
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your Password"
              required
              value={formData.password}
              onChange={(e) => setFormData({username: formData.username,
                email : formData.email,
                password :e.target.value
              })}
            />
              
            
           
            <button type= "submit" className='submitButton' onClick={handleSubmit}>
                Next step
            </button>

            <div className='textDiv'>
              <h3>{"Already have an account?"}</h3>
              <button className='SignInLogInButton'
                onClick={handleClikc}
              >
                Log in
              </button>
            </div>
            {isError && <h4 className='errorMessage'>Fill all of your blanked !!!</h4> }  
          </main>
      </div>
    )
};
  
  export default SignIn;
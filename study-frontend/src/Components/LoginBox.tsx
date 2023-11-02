import React, { useState, useEffect} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Authentication } from '../Services/Authentication/Authentication';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import '../cssFiles/loginSignInPage.css'

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};



type Props = {
  handleClick : ()=> void

};

const Login = ({handleClick} : Props ) => 
{    


  const[formData, setFormData] = useState({
    "email" : "",
    "password" : ""
  })

  const [isError, setIsError] = useState(false);
  const navigate = useNavigate(); 
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  
  const handleSubmit = async () => {
    if(formData.email !== "" && formData.password !== "")
    {
      try {
        const response = await Authentication(formData);
        
        
         sessionStorage.setItem("jwtAccess", response.token);
        navigate(routes.home);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    else
    {
      setIsError(true)
    }

  };
  return(
      <div className='centerBox'>
          <header className='headerLogIn'>
              Log in
          </header>
          <main>
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
                
                  setFormData({email: e.target.value, password: formData.password});
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
              onChange={(e) => setFormData({email: formData.email, password: e.target.value})}
            />


            <button type= "submit" className='submitButton' onClick={handleSubmit}>
                Submit
            </button>

            <div className='textDiv'>
              <h3>{"Not a Member?   "}</h3>
              <button className='SignInLogInButton'
                onClick={handleClick}
              >
                Sign up now
              </button>
            </div>
            {isError && <h4 className='errorMessage'>Fill all of your blanked !!!</h4> }  
          </main>
      </div>
  )
};
  
  
  export default Login;
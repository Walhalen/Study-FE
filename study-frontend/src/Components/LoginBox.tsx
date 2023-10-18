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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate(); 
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  
  const handleSubmit = async () => {
    if(email !== "" && password !== "")
    {
      try {
        const response = await Authentication({ email, password });
        
        
        sessionStorage.setItem("jwt", response.token);
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
              // className={`w-full border-2 border-gray-300 focus:border-blue-300 focus:outline-none rounded-md px-3 py-2 ${isError ? 'border-red-500' : ''}`}
              className={`${isError && email === '' && "inputError" }`}
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value);
                  setIsError(false); 
              }}
            
            />
            <label htmlFor="password">
              Password:
            </label>
            <div className="password-input-container">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`password-toggle-icon ${isPasswordVisible ? 'visible' : ''}`}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
             </i>
            </div>

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
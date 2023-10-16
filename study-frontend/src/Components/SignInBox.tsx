import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Registration from '../Services/Authentication/Registration';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import '../cssFiles/loginSignInPage.css'

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};







type Props = {
    handleClikc : () => void; 
};


const SignIn = ({handleClikc} : Props) => {
    const [response, setResponse] = useState();
    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate(); 

    
    const [message, setMessage] = useState("")
    
    const handleSubmit = async() => {
        if(username  !== "" && email !== "" && password !== ""){
            try{
                console.log(username)
                const response = await Registration({username,email,password}); 
                console.log(response);
                sessionStorage.setItem("jwt", response.token); 
                
                navigate(routes.home);
            }catch(error)
            {
                console.log("Error: ", error); 
                
            }
        }
        else{
          setIsError(true)
        }
    }

    return(
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
              className={`${isError && username === '' && "inputError" }`}
              // className={`w-full border-2 border-gray-300 focus:border-blue-300 focus:outline-none rounded-md px-3 py-2 ${isError ? 'border-red-500' : ''}`}
              value={username}
              onChange={(e) => {
                  setUsername(e.target.value);
                  setIsError(false); 
              }}
            
            />
            {/* {isError && password === '' && <h4 className='errorMessage'>Enter your Username !!!</h4> }   */}
            <label htmlFor="email">
              Email:
            </label>
            <input 
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              className={`${isError && email === '' && "inputError" }`}
              // className={`w-full border-2 border-gray-300 focus:border-blue-300 focus:outline-none rounded-md px-3 py-2 ${isError ? 'border-red-500' : ''}`}
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value);
                  setIsError(false); 
              }}
            
            />
            {/* {isError && password === '' && <h4 className='errorMessage'>Enter your Email !!!</h4> }   */}
            <label htmlFor="password">
              Password:
            </label>
            <input 
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              required
              className={`${isError && password === '' && "inputError" }`}
             
              value={password}
              onChange={(e) => {
                  setPassword(e.target.value);
                  setIsError(false); 
              }}
              
            />
            {/* {isError && password === '' && <h4 className='errorMessage'>Enter your Password !!!</h4> }   */}
            <button type= "submit" className='submitButton' onClick={handleSubmit}>
                Submit
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
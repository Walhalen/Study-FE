import React, { useState } from 'react'
import LogIn from '../Components/LoginBox'
import SignIn from '../Components/SignInBox'


const LogInAndSignIn = () => {

    const [signORlog, setSignORlog] = useState<Boolean>(true); 

    const handleClick : () => void = () => setSignORlog(!signORlog)
    return (
        <div className='LogAndSignBox'>
            
            {signORlog ? <LogIn handleClick = {handleClick}/> : <SignIn handleClikc = {handleClick}/>}

        </div>
    );
};

export default LogInAndSignIn

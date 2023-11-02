import React, { useState } from 'react'
import LogIn from '../Components/LoginBox'
import SignIn from '../Components/SignInBox'
import '../cssFiles/loginSignInPage.css'

const LogInAndSignIn = () => {

    const [signORlog, setSignORlog] = useState<Boolean>(true); 

    const handleClick : () => void = () => setSignORlog(!signORlog)
    return (
        <div className='LogAndSignBox'>
            <header>Study</header>
            {signORlog ? <LogIn handleClick = {handleClick}/> : <SignIn handleClikc = {handleClick}/>}
            {/* <div>
                hay
            </div>
            <div>
                hay
            </div>
            <div>
                hay
            </div>
            <div>
                hay
            </div>
            <div>
                hay
            </div>
            <div>
                hay
            </div>
            <div>
                hay
            </div>
            <div>
                hay
            </div> */}
        </div>
    );
};

export default LogInAndSignIn

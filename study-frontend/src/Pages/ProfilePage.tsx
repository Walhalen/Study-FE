import React, {useState} from 'react'
import '../cssFiles/profilePage.css'   
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useNavigation } from 'react-router-dom';
import { routes } from '../constants';

const ProfilePage = () => {
    
    const navigator = useNavigate()

    const handleHomeIcon = () => {
        navigator(routes.home)
    }

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
    React.useEffect(() => {
  
      window.addEventListener("resize", () => setViewportWidth(window.innerWidth));
      console.log("resize")
  
    }, []);

    return (
        <div className='profilePage'>
            {/* <header className='profilePageHeader'>
                <GoHome />
                <h1 className='profilePageHeaderText'>Your Prfile</h1>
            </header> */}
            {/* <div className='profilePageField'>
                
                <CgProfile className='profileIcon'/>  
            </div> */}


            {/* <main className='profilePageField'> */}
                <div className='MainContent'>
                    <header className='profileHeader'>
                        <button>
                            <GoHome style= {{fontSize: `${viewportWidth < 1200 ? "30px" : "30px " }` }}onClick={handleHomeIcon}/>
                        </button>
                        
                        <h1 className='profilePageHeaderText'>Your Prfile</h1>  
                    </header>
                    <CgProfile style={{fontSize:`${viewportWidth < 1200 ? "150px" : "200px " }`}}/>
                    <h1 style={{fontSize: "35px", fontWeight: "600"}}>
                        Ivan Postolov
                    </h1>
                    <div className='profileInfo'>
                        <div className='tagInfo'>
                            <h1 style={{fontSize: "20px"}}>Tags:</h1>
                            <div className='tagField'>
                                #tuka sa tagowete
                            </div>
                        </div>

                        <div className='descriptionInfo'>
                            <h1 style={{fontSize: "20px"}}>Description:</h1>
                            <div className='descriptionField'>
                                #tuk shte ima opisanieto na choveka
                            </div>
                        </div>
                        <div style={{width:"90%", height: "fit-content"}}>
                            
                            <div className='ratingInfo'>
                                <h1 style={{fontSize:"20px", marginRight:"5px", marginBottom: "3px", fontWeight:"400"}}>Your rating: </h1>
                                <AiFillStar style={{color: '#fad02c', fontSize: '25px'}} />
                                <h1 style={{fontSize:"20px", marginLeft:"5px", marginBottom: "2px", fontWeight:"400"}}>7</h1>   
                            </div>

                        </div>
                    </div>


                </div>
                
                
            {/* </main> */}
        </div>
    )
}

export default ProfilePage

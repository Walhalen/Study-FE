import React, {useContext, useEffect, useState} from 'react'
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import exampleImage1 from '../assets/continious-learning.png';
import onlineEdu from '../assets/onlineEdu.png'
import TeacherCard from './TeacherCard';
import { FaRegCircle } from "react-icons/fa";
import { User, UserDto } from '../Types/UserIntrfaces';
import {Tag} from '../Types/TagInterfaces';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import { ThemeContext } from '../Context/ThemeContext';


  
type Props = {
    user: UserDto;
}

const HomePageInformation = ({user}: Props) => {

    const [sliderIndex, setIndex] = useState(1);

    const {viewportWidth} = useContext(ThemeContext);
    
    const navigator = useNavigate(); 


    const handleLeft = () => {
        if(sliderIndex === 1)
            setIndex(2);
        else
            setIndex(sliderIndex - 1);
    }

    const handleRight = () => {
        if(sliderIndex === 2)
            setIndex(1);
        else
            setIndex(sliderIndex + 1);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
          handleRight(); // Automatically call handleRight every 10 seconds
        }, 10000);
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [sliderIndex]);
    
      const handleProfileButton = () => {
        console.log("helo")
        navigator(routes.profilePage)
    }

    return (
        viewportWidth < 1000 ? 
        <div style={{padding: "10px"}}>
            <div className='MobileInfoHome'>
    
                <div style ={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
                    <h1  className='Info'>
                        As a registered user, you have the unique opportunity to become a teacher in the subjects you excel at.
                    </h1>
                    <button className="ProfileButton" onClick={handleProfileButton}>
                        Your Profile
                    </button>
                </div>
            </div>
        </div>
        : 
        <div style={{display:"flex", width: "100%", justifyContent: 'center'}}>
            <div className='InfoHome'>
                {
                    sliderIndex === 1 && 
                    <div style={{display:'flex'}}>
                        <h1 className='Info'>
                            Welcome to our community-driven learning platform! On our site, anyone can become a teacher in their area of expertise. The goal is to create a supportive network where individuals can assist each other in various educational realms. We believe that learning is most effective when it's shared among peers, fostering a sense of collaboration and friendship. Join us and embark on a journey of knowledge exchange tailored to your passions and skills.
                        </h1>
                        <div className='ImgInfo'>
                            <img src={exampleImage1} alt="Exaple 1" />
                        </div>
                    </div>

                }

                {
                    sliderIndex === 2 && 
                    <div style={{display:'flex'}}>
                        <div >
                            <TeacherCard user={user}/>
                        </div>
                        <div style ={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
                            <h1  className='Info'>
                                As a registered user, you have the unique opportunity to become a teacher in the subjects you excel at.
                            </h1>
                            <button className="ProfileButton"  onClick={handleProfileButton}>
                                Your Profile
                            </button>
                        </div>

                        
                    </div>

                }
                <div className='InfoHomeSlider'>
                    <div style = {{display:"flex", gap:"10px"}}>
                        <div style={{ fontWeight: 'bold', fontSize: '25px', color: sliderIndex === 1 ? 'black' : 'inherit' }}>
                            .
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: '25px', color: sliderIndex === 2 ? 'black' : 'inherit'}}>
                           .
                        </div>
                        {/* <div style={{ fontWeight: 'bold', fontSize: '25px', color: sliderIndex === 3 ? 'black' : 'inherit' }}>
                            .
                        </div> */}
                    </div>
                    <div style = {{display:"flex", gap:"10px"}}>
                        <MdKeyboardArrowLeft style={{fontSize: 20, color: "black"}} onClick={handleLeft}/>
                        <MdChevronRight style={{fontSize: 20, color: "black"}} onClick={handleRight}/>
                    
                    </div>

                </div>
            
            </div>
            {viewportWidth > 1650 && 
                <div className='ImgHome'>
                
                </div>
            }   
        </div>
        
    )
}

export default HomePageInformation

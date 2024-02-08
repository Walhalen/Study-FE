import React, {useContext, useEffect, useState} from 'react'
import '../cssFiles/profilePage.css'   
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useNavigation } from 'react-router-dom';
import { routes } from '../constants';
import learning from '../assets/learning2.png'
import useUserStore from '../Storages/UserStorage';
import TagCard from '../Components/TagCard';
import { ThemeContext } from '../Context/ThemeContext';
import { HistoryAndFavoriteComponent } from '../Components/HistoryAndFavoriteComponent';
const ProfilePage = () => {
    
    const navigator = useNavigate()

    const handleHomeIcon = () => {
        navigator(routes.home)
    }
    const {me} = useUserStore();
    const {viewportWidth} = useContext(ThemeContext);
    const [drop, setDrop] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setDrop(true);
        }, 0);
    
        
        return () => clearInterval(intervalId);
    }, []);


    return (
        viewportWidth < 1200 ? 
        <div className='profilePage'>

            <div className='MainContent'>
                <header className='profileHeader'>
                    <button>
                        <GoHome style= {{fontSize: `${viewportWidth < 1200 ? "30px" : "30px " }` }}onClick={handleHomeIcon}/>
                    </button>
                    
                    <h1 className='profilePageHeaderText'>Your Prfile</h1>  
                </header>
                <CgProfile style={{fontSize:`${viewportWidth < 1200 ? "150px" : "200px " }`}}/>
                <h1 style={{fontSize: "35px", fontWeight: "600"}}>
                    {me.username}
                </h1 >
                <h1 style={{fontSize: "20px"}}>
                    {me.email}
                </h1>
                <div className='profileInfo'>
                    <div className='tagInfo'>
                        <h1 style={{fontSize: "20px"}}>Tags:</h1>
                        <div className='tagField'>

                            { me.tags.length !== 0 ? me.tags.map((tag) => (
                                <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
                            )): 
                                <h1 style={{color:"red"}}>
                                    No tags
                                </h1>
                            }
                        </div>
                    </div>

                    <div className='descriptionInfo'>
                        <h1 style={{fontSize: "20px"}}>Description:</h1>
                        <div className='descriptionField'>
                            {me.description ? me.description :
                                <h1 style={{color: "red"}}>No description</h1>
                            }
                        </div>
                    </div>
                    <div style={{width:"90%", height: "fit-content"}}>
                        
                        <div className='ratingInfo'>
                            <h1 style={{fontSize:"20px", marginRight:"5px", marginBottom: "3px", fontWeight:"400"}}>Your rating: </h1>
                            <AiFillStar style={{color: '#fad02c', fontSize: '25px'}} />
                            <h1 style={{fontSize:"20px", marginLeft:"5px", marginBottom: "2px", fontWeight:"400"}}>{me.rating}</h1>   
                        </div>

                    </div>
                </div>


            </div>
                
                
           
        </div>
        :
        <div style={{position:"relative", minHeight:"100vh", height:"fit-content"}}>
            <div className='profilePage2'>
                <div className='MainMenu'>
                    <header className='profileHeader'>
                        <button>
                            <GoHome style= {{fontSize: `${viewportWidth < 1200 ? "30px" : "30px " }` }}onClick={handleHomeIcon}/>
                        </button>
                        
                        <h1 className='profilePageHeaderText'>Your Profile</h1>  
                    </header>
                    <img src={learning} alt="ALoooo" style={{opacity:"0.5" }}/>
                </div>
            </div>
            
            <div className='MainContent2' style={{marginTop: `${drop ? "65vh" : "10vh" }`}}>
                <div className='FirstContent'>
                    <div className='firstBox'>
                    <div className='firstBoxHeader'>
                            <div style={{width: "50%"}}>
                                <h1 style={{fontSize:"20px"}}>My account</h1>
                            </div>
                            
                            <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
                                <button className='SignoutButton'>Sign out</button>
                            </div>
                            
                    </div>
                    <div className='firstBoxBody'>
                            <div>
                                <h1 style ={{fontSize: "18px", color: "gray"}}>User Information</h1>
                            </div>
                            <div style={{padding: "20px"}}>
                                <h1 style ={{fontSize: "17px", fontWeight: "bold", color:"#5a6685"}}>Your Tags:</h1>
                                <div className='UserInfo'>
                                { me.tags.map((tag) => (
                                    <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
                                ))}
                                </div>
                                <h1 style ={{fontSize: "17px", fontWeight: "bold", color:"#5a6685"}}>Your Description:</h1>
                                <div className='UserInfo'>
                                    {me.description}
                                </div>
                            </div>
                    </div>

                    </div>
                    <div className='secondBox'>
                        <div className='profileIcon'>
                            <CgProfile/>
                        </div>
                        <div style={{display:'flex', alignItems:"center", justifyContent:'center', flexDirection:"column", width: "100%", marginTop: "150px",marginBottom:"50px"}}>
                            <h1 style={{fontSize: "35px", fontWeight: "500", color:"#5a6685", wordBreak: "break-all", overflowWrap:"break-word", maxWidth: "70%", textAlign: "center"}}>
                            {me.username}</h1>
                            <h1 style={{fontSize: "20px", color:"#5a6685", textAlign:"center", marginBottom: "40px"}}>{me.email}</h1>
                            <h1 style={{fontSize: "20px", color:"black", textAlign:"center", marginBottom: "20px"}}>
                                As a registered user, you have the unique opportunity to become a teacher in the subjects you excel at.
                            </h1>
                        </div>
                        <button className='HomePageLink'>
                            <h1>Explore the Study platform and find the right teachers for you !!!</h1>
                        </button>
                    </div>            
                </div>
                <hr style={{border: "1.2px solid rgb(197, 218, 242)", width: "97%", marginBottom: "35px"}}/>
                <HistoryAndFavoriteComponent/>        
            </div>    
            <div className='PageInfo' style={{marginTop: `${drop ? "18vh" : "0vh"}`}}>
                <h1 style={{fontSize:"55px", color:"white"}}>Hello {me.username}</h1>
                <h1 style={{fontSize:"18px", color:"white"}}>
                    This is your profile page! You can see your tags, description and everything for your profile! If you want you can edit your profile
                </h1>
                <button className='EditButton'>
                    Edit Profile 
                </button>
            </div>
        </div>

    )
}

export default ProfilePage

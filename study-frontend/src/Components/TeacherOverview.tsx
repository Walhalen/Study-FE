import React, { useEffect, useRef, useState } from 'react'
import '../cssFiles/teacherOverview.css'
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import { User, UserDto } from '../Types/UserIntrfaces';
import TagCard from './TagCard';
import { PostNewFavorite } from '../Services/User/PostNewFavorite';
import { PostRemoveFavorite } from '../Services/User/PostRemoveFavorite';
import useUserStore from '../Storages/UserStorage';
import { MdHeartBroken } from "react-icons/md";
import ChatBox from './ChatBox';


type Props = {
  user: UserDto;
}

const TeacherOverview = ({user} : Props) => {

    const refChat : any  = useRef(null);
    const [moreInfo, setMoreInfo] = useState(true);
    const [liked, setLiked] = useState(false)
    const {me} = useUserStore();
    const [likeInfo, setLikeInfo] = useState(false);
    const handleLiked = async() => {
      
      if(liked === false)
      {
          const email = user.email; 
          const data = await PostNewFavorite({email});
      }
      else
      {
          const email = user.email;
          const data = await PostRemoveFavorite({email});
      }
      
       setLiked(!liked)
    }
    
    useEffect(()=>{
      const ifLiked = () => {
        me.favorites.map((fav_user) => {
          if(fav_user.username === user.username)
          {
            setLiked(true);
          }
        })
      } 
    
      ifLiked();
    
    }, [])
    

    return (
      <main>
        <div className='TeacherOverviewField'>
            <div className='OverviewField'>
              <section className='FirstSection'>
                <div className='TeacherIcon'>
                  <CgProfile/>
                </div>
                <section className='SecondSection'>
                  <h1 style={{fontSize: "45px", fontWeight: "bold"}}>
                    {`${user.username.length >= 10 ? user.username.substring(0, 7) + "..."  : user.username}`}
                  </h1>
                  <div className='RatingButton'>
                    <AiFillStar style={{color: '#fad02c', fontSize: '25px'}} />
                    <h1>
                      {user.rating}
                    </h1>
                  </div>
                </section>
              </section>
              <hr style={{marginTop: "20px", border:"1.2px solid #a7b2c2"}}/>
              <section className='TagSection'>
                <h1 className='SectionTitle'>
                  Tags:
                </h1>
                <div className='TeacherTagField'>
                  {
                    user.tags === null || user.tags.length === 0 ? 
                    <h1>
                      Not tags
                    </h1>
                    : 
                    <>
                      
                      {user.tags.length <  8 ? 
                        user.tags.map((tag) => (
                          <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
                        )) : 
                        user.tags.slice(0,8).map((tag) => (
                          <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
                        )) 
                      }
                      {user.tags.length >  8 && <h1 style = {{fontWeight: 'bold', fontSize: '18', margin:"5px"}}>...</h1>}
                    </>
                  }
                </div>
              </section>
              <section className='DescriptionSection'>
                <h1 className='SectionTitle'>
                  Description: 
                </h1>
                <h1 className='DescriptionField'>
                  {`${user.description.length >= 60 ? user.description.length > 4 ? user.description.substring(0, 60)+ "..." :
                    user.description.length <= 90 ?  user.description : user.description.substring(0, 90) + "..."   : user.description}`}
                </h1>
      
      
              </section>
              <section className='LastSection'>
                <button className='ChatNowButton' onClick={() => {
                  refChat.current?.scrollIntoView({behavior: "smooth"});
                 
                }}>
                  Chat Now
                </button>
              </section>       
      
            </div>
            
            <section>
              <div className='MoreInformationSection'>
                  
                  <h1 className='MoreInfoTitle'>More Information</h1>

                  <h1 className='SectionTitle'>
                    Full name: 
                  </h1>
                  <h1 className='FullName'>
                    {user.username}
                  </h1>
                  <h1 className='SectionTitle'>Full Description: </h1>
                  <div className='TeacherFullDesriptionField'>
                    {user.description}
                  </div>
                  <h1 className='SectionTitle'>All tags:  </h1>
                  <div className="TeacherAllTagsField">
                    {
                      user.tags.map((tag) => (
                        <TagCard  key={tag.id} name = {tag.name} color = {tag.color}/>
                      )) 
                    }
                  </div>
              </div>
              <div className='TeacherLikeAndRateSection'>
                  <div className='RateButton'>
                    <button style={{fontSize: "22px", color: "black"}}>
                      <TiStarOutline />
                    </button>
                    <button style={{fontSize: "23px", color: "black"}}>
                      <TiStarOutline />
                    </button>
                    <button style={{fontSize: "24px", color: "black"}}>
                      <TiStarOutline />
                    </button>
                    <button style={{fontSize: "25px", color: "black"}}>
                      <TiStarOutline />
                    </button>
                    <button style={{fontSize: "26px", color: "black"}}>
                      <TiStarOutline />
                    </button>
                    <button style={{fontSize: "27px", color: "black"}}>
                      <TiStarOutline />
                    </button>
                    <h1>
                      Rate the Teacher
                    </h1>
                  </div>
                  <button className='LikeButton' onClick = {handleLiked} onMouseEnter={()=>setLikeInfo(true)} onMouseLeave={()=>setLikeInfo(false)}>              
                    {
                      likeInfo ? <>
                        {
                          liked ? 
                          <>
                            <h1>
                              UnLike
                            </h1>
                            <MdHeartBroken style = {{color:"rgb(242, 146, 162)", fontSize:"30px", marginTop: "5px"}}/>
                          </>

                          : 
                          <h1>
                            Like
                          </h1>
                        }
                      </>:
                      <>
                        <h1>
                          {liked ? 'Liked Teacher' : 'Like Teacher'}
                        </h1>
                        {
                            liked ?        
                              <IoMdHeart style = {{color:"rgb(242, 146, 162)", fontSize:"30px", marginTop: "5px"}}/>    
                                : 
                              <IoMdHeartEmpty style = {{color:"rgb(242, 146, 162)", fontSize:"30px", marginTop: "5px"}}/>                       
                        } 
                      </>
                    }
                  </button>
              </div>
            </section>


        </div>
        
          <ChatBox RefChat={refChat} otherEmail = {user.email}/>
        
        
   
      </main>
    )
  }

export default TeacherOverview

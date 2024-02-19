import React, { useContext, useState } from 'react'
import { Menu } from '../Components/Menu'
import ClosedMenu from '../Components/Header';
import { CiSearch } from "react-icons/ci";
import FilterDropDown from '../Components/FilterDropDown';
import { largeScreenProfileMenu, mediumScreenMenu, smallScreenMenu } from '../constants';
import { ThemeContext } from '../Context/ThemeContext';
import useUserStore from '../Storages/UserStorage';
import  FavoriteTeacherCard, { FavoriteOrHistoryTeacherCard }  from '../Components/FavoriteOrHistoryTeacherCard';
import '../cssFiles/favoritesPage.css'
import FavoritesPageInfo from '../Components/FavoritesPageInfo';
import TeacherCard from '../Components/TeacherCard';

interface MenuPage{
    name: string,
    rout: string, 
    style: string,

  }

const FavoriteTeachersPage = () => {
    const [clickedFa, setClickedFa] = useState(false);
    
    const handleFaBar = () => setClickedFa(!clickedFa) 
  
    
    const [clickedProfile, setClickedProfile] = useState(false);
    const handleProfileBar = () => setClickedProfile(!clickedProfile);
    const [filterDropDown, setFilterDropDown] = useState(false);
    const hanleFilterDropDown = () => setFilterDropDown(!filterDropDown);
    const {me} = useUserStore();

    
    const {viewportWidth} = useContext(ThemeContext);

    
    let ProfileMenuPages : MenuPage[] = [];
    let MenuPages : MenuPage[] = []; 
  
    if (viewportWidth > 780) {
      if(viewportWidth < 1250)
      {
        MenuPages = mediumScreenMenu
      }
  
        ProfileMenuPages  = largeScreenProfileMenu
      
    } else {
      
      MenuPages = smallScreenMenu
      
    }
  

    return (
      <div className='overflow-x' style={{height: "100vh", display: "flex", flexDirection: "column"}}>
          <header className='header'>
            <ClosedMenu handleFaBar={handleFaBar} handleProfileBar = {handleProfileBar} handleFilterDropDown = {hanleFilterDropDown}  filterDropDown = {filterDropDown}/>
          </header>
          <div className='MainColor'>
              {viewportWidth < 1250 && 
                <div>
                  {clickedFa && <Menu handleFaBar={handleFaBar} pages = {MenuPages} style = "sideBar"/> }
                </div>
              }
              <div>
                {clickedProfile && <Menu handleFaBar={handleProfileBar} pages = {ProfileMenuPages} style = "profileSideBar"/> }
              </div>  
              

              <main >
                <h1 className='TitleHome'>Favorites Page</h1>
                <div>
                  <FavoritesPageInfo/>
                </div> 
                <hr style={{border:"1.2px solid rgb(197, 218, 242)", margin: "35px"}}/>
                <h1 className='SubTitle'>Favorite Teachers: </h1>
                {
                  viewportWidth > 850 ? 
                  <div className='FavoriteField'>           
                    {
                      me.favorites.map((user) => (
                        <FavoriteOrHistoryTeacherCard key={user.username} user={user} historyOrFavorite={false}/>
                      ))
                    }
                  </div>
                  :
                  <div className='cardField'>
                    {me.favorites.map((user) => (
                        <TeacherCard key={user.username} user = {user} />
                    ))}
                  </div>
                }

              </main>
          </div>
      </div>
    )
}

export default FavoriteTeachersPage

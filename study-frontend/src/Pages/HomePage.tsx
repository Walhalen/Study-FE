
import ClosedMenu from '../Components/Header';
import { Menu } from '../Components/Menu';
import TeacherCard from '../Components/TeacherCard';
import FetchAllUsers from '../Services/User/FetchAllUsers';
import React, { useState, useEffect, useContext } from "react";
import '../cssFiles/homePage.css'
import '../cssFiles/mainMenu.css'
import { CiSearch } from "react-icons/ci";
import FilterDropDown from '../Components/FilterDropDown';
import HomePageInformation from '../Components/HomePageInformation';
import { ThemeContext, ThemeContextProvider } from '../Context/ThemeContext';
import { largeScreenProfileMenu, mediumScreenMenu, smallScreenMenu } from '../constants';
import { User, UserDto } from '../Types/UserIntrfaces';
import { MenuPage } from '../Types/MenuPageInterfaces';
import useUserStore from '../Storages/UserStorage';
import { FetchAllUsersPageable } from '../Services/User/FetchAllUsersPageable';
import { PageSwitcher } from '../Components/PageSwitcher';



const HomePage = () => {

  const [users, setUsers] = useState<UserDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [clickedFa, setClickedFa] = useState(false);
  const [clickedProfile, setClickedProfile] = useState(false);
  const [filterDropDown, setFilterDropDown] = useState(false);
  const hanleFilterDropDown = () => setFilterDropDown(!filterDropDown);
  const {me} = useUserStore(); 
  const [page, setPage] = useState(0);


  useEffect(() => {

    const fetchData = async () => {
      try { 
        const data = await FetchAllUsersPageable({page});
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }

    };

    fetchData();
  }, [page]);
  
  const {viewportWidth} = useContext(ThemeContext);
  



  const handleFaBar = () => setClickedFa(!clickedFa);
  const handleProfileBar = () => setClickedProfile(!clickedProfile);
 


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
        <ClosedMenu handleFaBar={handleFaBar} handleProfileBar = {handleProfileBar} handleFilterDropDown = {hanleFilterDropDown} filterDropDown = {filterDropDown}/>
      </header>

      

      <div>
          {/* {filterDropDown &&   
            <div style={{  position: 'absolute', top:" 6.5rem", right: "4.3rem", zIndex:1}}>
              <FilterDropDown/> 
            </div>        
               
          } */}

          {viewportWidth < 1250 && 
            <div>
              {clickedFa && <Menu handleFaBar={handleFaBar} pages = {MenuPages} style = "sideBar"/> }
            </div>
           }
          <div>
            {clickedProfile && <Menu handleFaBar={handleProfileBar} pages = {ProfileMenuPages} style = "profileSideBar"/> }
          </div>
         

        <main>
        
          <h1 className='TitleHome'>Home Page</h1>
          {users && <HomePageInformation user={me}/>  }
          
          
          
          <hr style={{border:"1.2px solid rgb(197, 218, 242)", margin: "35px"}}/>
           <h1 className='SubTitle'>Teachers: </h1>
           <div className='cardField'>
              {error && <div>Error: {error}</div>}
                {users && (
                    <div className='cardField'>
                      {users.filter((user) => user.email !== me.email).map((user) => (
                        
                        <TeacherCard key={user.email} user={{
                          username: user.username,
                          email: user.email,
                          tags: user.tags, 
                          description: user.description,
                          rating: user.rating
                        }} />
                        // <div>
                        //   hello
                        // </div>
                      ))}
                    </div>
                )}
            </div>
            
        </main>
        
      </div>
      <PageSwitcher page= {page} setPage={setPage} searchValue='' tag=""/>
   </div>

     
  )
}

export default HomePage

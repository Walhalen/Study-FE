
import ClosedMenu from '../Components/Header';
import { Menu } from '../Components/Menu';
import TeacherCard from '../Components/TeacherCard';
import FetchAllUsers from '../Services/User/FetchAllUsers';
import React, { useState, useEffect } from "react";
import '../cssFiles/homePage.css'
import '../cssFiles/mainMenu.css'
import { CiSearch } from "react-icons/ci";
import FilterDropDown from '../Components/FilterDropDown';
import HomePageInformation from '../Components/HomePageInformation';


interface Tag{
  id : number,
  name : string,
  color : string 
}

interface MenuPage{
  name: string,
  rout: string, 
  style: string,
}


interface User {
  id : number,
  username: string,
  email : string
  tags : Array<Tag>
  description : string, 
  rating : number
}




const HomePage = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [clickedFa, setClickedFa] = useState(false);
  const [clickedProfile, setClickedProfile] = useState(false);
  const [filterDropDown, setFilterDropDown] = useState(false);
  const hanleFilterDropDown = () => setFilterDropDown(!filterDropDown);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }

    };

    fetchData();
  }, []);
  
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  React.useEffect(() => {

    window.addEventListener("resize", () => setViewportWidth(window.innerWidth));
    console.log("resize")

  }, []);

  const handleFaBar = () => setClickedFa(!clickedFa);
  const handleProfileBar = () => setClickedProfile(!clickedProfile);
 
  let pages : MenuPage[] = [];
  let pages2 : MenuPage[] = []; 

  if (viewportWidth > 780) {
    if(viewportWidth < 1250)
    {
      pages2 = [
        {
          name: "Home Page",
          rout: "home",
          style: "SideBarButton",

        },
        {
          name: "Messages",
          rout: "searchPage",
          style: "SideBarButton",

        },
        {
          name: "Favorites",
          rout: "favorites",
          style: "SideBarButton",

        },
        {
          name: "History",
          rout: "history",
          style: "SideBarButton",

        },
      ];
    }

      pages  = [
        
        {
          name: "Your Profile",
          rout: "profile",
          style: "SideBarButton",

        },
        {
          name: "Sign out",
          rout: "signOut",
          style: "SignOutButton",

        },
      ];
    
  } else {
    
    pages2 = [
      {
        name: "Home Page",
        rout: "home",
        style: "SideBarButton",

      },
      {
        name: "Messages",
        rout: "searchPage",
        style: "SideBarButton",

      },
      {
        name: "Favorites",
        rout: "favorites",
        style: "SideBarButton",

      },
      {
        name: "History",
        rout: "history",
        style: "SideBarButton",

      },
      {
        name: "Sign out",
        rout: "signOut",
        style: "SignOutButton",

      },
    ];
    
  }
  
  return (
    

    <div className='overflow-x'>
      
      <header className='header'>
        <ClosedMenu handleFaBar={handleFaBar} handleProfileBar = {handleProfileBar} handleFilterDropDown = {hanleFilterDropDown} filterDropDown = {filterDropDown}/>
      </header>

      

      <div>
          {filterDropDown &&           
            <FilterDropDown/>    
          }

          {viewportWidth < 1250 && 
            <div>
              {clickedFa && <Menu handleFaBar={handleFaBar} pages = {pages2} style = "sideBar"/> }
            </div>
           }
          <div>
            {clickedProfile && <Menu handleFaBar={handleProfileBar} pages = {pages} style = "profileSideBar"/> }
          </div>
         

        <main>
        
          <h1 className='TitleHome'>Home Page</h1>
          {users && <HomePageInformation user={users[0]}/>  }
          
          
          
          <hr style={{border:"1.2px solid rgb(197, 218, 242)", margin: "35px"}}/>
           <h1 className='SubTitle'>Teachers: </h1>
           <div className='cardField'>
              {error && <div>Error: {error}</div>}
                {users && (
                    <div className='cardField'>
                      {users.map((user) => (
                        
                        <TeacherCard key={user.id} username={user.username}
                        email = {user.email} tags = {user.tags} 
                        description = {user.description} rating = {user.rating}  />
                        // <div>
                        //   hello
                        // </div>
                      ))}
                    </div>
                )}
            </div>
        </main>
      </div>
   </div>

     
  )
}

export default HomePage

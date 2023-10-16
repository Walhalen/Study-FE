
import ClosedMenu from '../Components/Header';
import { Menu } from '../Components/Menu';
import TeacherCard from '../Components/TeacherCard';
import FetchAllUsers from '../Services/User/FetchAllUsers';
import React, { useState, useEffect } from "react";
import '../cssFiles/searchPage.css'

interface User {
  id : number,
  username: string,
  email : string
  password: string
  
  
}

const SearchPage = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [clickedFa, setClickedFa] = useState(false);
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
  


  const handleFaBar = () => setClickedFa(!clickedFa) 


  return (


    <div>
      <header className='header'>
        <ClosedMenu handleFaBar={handleFaBar}/>
      </header>
      
      <div className={ clickedFa ? 'FlexableContainerHorizontal' : 'FlexableContainerVertical'}>
          
          {clickedFa && <Menu handleFaBar={handleFaBar}/> }
          <main className='cardField'>
            {error && <div>Error: {error}</div>}
              {users && (
                  <div className='cardField'>
                    {users.map((user) => (
                      <TeacherCard key={user.id} username={user.username} />
                      // <div>
                      //   hello
                      // </div>
                    ))}
                  </div>
              )}
          </main>
      </div>
   </div>

     
  )
}

export default SearchPage

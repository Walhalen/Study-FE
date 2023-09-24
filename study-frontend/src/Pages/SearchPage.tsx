
import ClosedMenu from '../Components/ClosedMenu';
import { Menu } from '../Components/Menu';
import FetchAllUsers from '../FetchFunctions/User/FetchAllUsers';
import React, { useState, useEffect } from "react";


interface User {
  id : number,
  first_name : string,
  last_name : string,
  password: string,
  email : string
  
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
      <ClosedMenu handleFaBar={handleFaBar}/>
      <div className={ clickedFa ? 'FlexableContainerHorizontal' : 'FlexableContainerVertical'}>
          {clickedFa && <Menu handleFaBar={handleFaBar}/> }
          <div>
            {error && <div>Error: {error}</div>}
              {users && (
                  <div>
                    {users.map((user) => (
                      <h1 key={user.id}>{user.first_name}</h1>
                    ))}
                  </div>
              )}
          </div>
      </div>
   </div>

     
  )
}

export default SearchPage

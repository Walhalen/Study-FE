
import ClosedMenu from '../Components/ClosedMenu';
import { Menu } from '../Components/Menu';
import FetchAllUsers from '../FetchFunctions/User/FetchAllUsers';
import React, { useState, useEffect } from "react";

const SearchPage = () => {

  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
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

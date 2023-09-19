
import { Menu } from '../Components/Menu';
import FetchAllUsers from '../FetchFunctions/User/FetchAllUsers';
import React, { useState, useEffect } from "react";

const SearchPage = () => {

  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

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
  
  return (
    
    <div className='searchPageContainer'>
      <Menu/>
      {error && <div>Error: {error}</div>}
      {users && (
        <div>
          {users.map((user) => (
            <h1 key={user.id}>{user.first_name}</h1>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage

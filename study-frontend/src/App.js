import React, { useState, useEffect } from "react";
import FetchAllUsers from "./FetchFunctions/User/FetchAllUsers";
import axios from 'axios'

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/findAll");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }

    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.first_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

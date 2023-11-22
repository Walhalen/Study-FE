import React, {useEffect, useState}from 'react'
import '../cssFiles/searchPage.css'
import '../cssFiles/mainMenu.css'
import { CiSearch } from "react-icons/ci";
import FetchAllUsers from '../Services/User/FetchAllUsers';
import TeacherCard from '../Components/TeacherCard';
import FetchFilteredUsers from '../Services/User/FetchFilteredUsers';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants';
import { GoHome } from "react-icons/go";

interface Tag{
    id : number,
    name : string,
    color : string 
  }

interface User {
    id : number,
    username: string,
    email : string
    tags : Array<Tag>
    description : string, 
    rating : number
  }
  

const SearchPage = () => {
    const params  = useParams()

    const [searchValue, setSearchValue] = useState(params.searchInfo);
    const [users, setUsers] = useState<User[]>([]);
    const [searchedUsers, setSearchedUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigator = useNavigate();
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await FetchAllUsers();
            if(params.searchInfo !== null && params.searchInfo !== undefined && params.searchInfo !=="")
            {
                setUsers(
                    data.filter((user : User)=>user.username.startsWith(params.searchInfo as string))
                );
            }
            else{
                setUsers(data);
            }

            setSearchedUsers(data)
          } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data");
          }
    
        };
    
        fetchData();
      }, []);

    const handleSearch = async () => {
        try {
            if(searchValue !== "" && searchValue!== undefined)
            {
                const data = await FetchFilteredUsers({searchValue});
                setUsers(data);
                setSearchedUsers(data);
            }
            else{
                const data = await FetchAllUsers();
                setUsers(data);
                setSearchedUsers(data);
            }

          } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data");
          }
    }
    const onChange = (e : any) =>{
        setSearchValue(e.target.value);
        const searchInfovalue = e.target.value;
        if(e.target.value  !== "")
        { 
            console.log("filtering...")
            setUsers(
                searchedUsers.filter((user)=>user.username.startsWith(searchInfovalue as string))
            )
        }
        else
        {
            setUsers(searchedUsers)
        }

    }

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
    React.useEffect(() => {
  
      window.addEventListener("resize", () => setViewportWidth(window.innerWidth));
      console.log("resize")
  
    }, []);

    return (
        <div className= 'searchPage'>
                <div style= {{display:'flex', justifyContent:'center', width:'100%'}}>
                    <button className='homeIconField'>
                        <GoHome className='homeIcon' onClick={()=>{
                            navigator(routes.home)
                        }}/>
                    </button>
                    <div className='SearchBarField' >
                        <input
                            type="text"
                            placeholder="Search"
                            className="SearchBar"
                            style = {{width : `${viewportWidth   < 780 ? '250px' : '350px'}`}}
                            value={searchValue}
                            onChange={(e)=>onChange(e)}
                            autoFocus  
                        />
                        <button className='iconInsideSearch' onClick={handleSearch}><CiSearch id='SearchIcon' /></button>
                    </div>
                </div>
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

    )
}

export default SearchPage

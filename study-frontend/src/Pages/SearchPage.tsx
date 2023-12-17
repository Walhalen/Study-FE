import React, {useEffect, useState}from 'react'
import '../cssFiles/searchPage.css'
import '../cssFiles/mainMenu.css'
import { CiSearch } from "react-icons/ci";
import FetchAllUsers from '../Services/User/FetchAllUsers';
import TeacherCard from '../Components/TeacherCard';
import FetchFilteredUsers from '../Services/User/FetchFilteredUsers';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants';
import { GoHome } from "react-icons/go";
import FetchFilteredByTagUsers from '../Services/User/FetchFilteredByTagUsers';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import FilterDropDown from '../Components/FilterDropDown';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

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

  type Props = {
    searchInfo: string, 
    tagName :string
  }

  

const SearchPage = () => {
    const props = useLocation();
    let params = props.state 
    if(params === null)
    {
      params = {
          searchInfo : " ", 
          tagName : " "
      } 
    }
    const [searchValue, setSearchValue] = useState(params.searchInfo);
    const [tagValue, setTagValue] = useState(params.tagName);

    const [users, setUsers] = useState<User[]>([]);
    const [searchedUsers, setSearchedUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigator = useNavigate();
    const [filterIcon, setFilterIcon] = useState(false); 
    const [ratingButton, setRatingButton] = useState(false);

    useEffect(() => {
        console.log("alo da 1 ")
        const fetchData = async () => {
          try {
            const data = await FetchAllUsers();
            if(searchValue !== null && searchValue !== undefined && searchValue !=="")
            {
                setUsers(
                    data.filter((user : User)=>user.username.startsWith(searchValue as string))
                );
            }
            else{
              if(tagValue !== null && tagValue !== undefined && tagValue !== "")
              {
                console.log("Alo da tag")
                console.log(tagValue)
                const filteredData = await FetchFilteredByTagUsers({tagValue});
                setUsers(filteredData);
                
              }
              else
              {
                setUsers(data);
              }
                
            }

            setSearchedUsers(data)
          } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data");
          }
    
        };
    
        fetchData();
      }, [tagValue]);

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


    const handleFilter = () => {
      setFilterIcon(!filterIcon);
    } 

    const handleRatingButton = () => {
      setRatingButton(!ratingButton)
      setUsers(users.sort(function(a,b){ return a.rating - b.rating}).reverse())
    }

    return (
      <div >
            <div className= 'searchPage'>
              <div style= {{display:'flex', justifyContent:'center', width:'100%' }}>
                  <button className='homeIconField'>
                      <GoHome className='homeIcon' onClick={()=>{
                          navigator(routes.home)
                      }}/>
                  </button>
                  <div>
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
                      <div style={{paddingLeft: "10px"}}>
                        <div style = {{ overflow: 'hidden'}}>
                          <div className='FilterIcon' style={{width : `${viewportWidth   < 780 ? '250px' : '350px'}`, display: 'flex'}}>
                              
                              <button onClick={handleFilter} style={{width: "100%"}}>
                                {filterIcon ? <RiArrowDropUpLine /> 
                                : <RiArrowDropDownLine />}
                              </button>

                              <button onClick={handleRatingButton}>
                                {ratingButton ? <FaStar style={{color : '#fad02c', fontSize: "17px", marginRight: "2px"}}/> 
                                  : <CiStar />
                                }
                                  
                              </button>
                                
                          </div>
                          {filterIcon &&   
                              <div style={{  position: 'absolute',marginLeft: `${viewportWidth   < 780 ? '0' : '40px'}`, zIndex:1}}>
                                <FilterDropDown/>    
                              </div>                             
                          }
                          
                        </div>
                      </div>

                  </div>
   
              </div>

              {error && <div>Error: {error}</div>}
              {users && (
                <main className='cardField'>

                  {users.map((user) => (
                    
                    <TeacherCard key={user.id} username={user.username}
                      email = {user.email} tags = {user.tags} 
                      description = {user.description} rating = {user.rating}  />
                    // <div>
                    //   hello
                    // </div>
                  ))}
                </main>
              )}
        </div>   
      </div>
    )
}

export default SearchPage

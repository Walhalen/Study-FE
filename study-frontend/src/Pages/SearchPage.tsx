import React, {useContext, useEffect, useState}from 'react'
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
import { FetchFilteredUsersPageable } from '../Services/User/FetchFilteredUsersPageable';
import { PageSwitcher } from '../Components/PageSwitcher';
import { User } from '../Types/UserIntrfaces';
import useUserStore from '../Storages/UserStorage';
import { ThemeContext } from '../Context/ThemeContext';





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

    const [error, setError] = useState<string | null>(null);
    const navigator = useNavigate();
    const [filterIcon, setFilterIcon] = useState(false); 
    const [ratingButton, setRatingButton] = useState(false);
    const {me} = useUserStore();

    const [page, setPage] = useState(0);

    useEffect(() => {
        
        const fetchData = async () => {
          try {
            
            if(searchValue !== null && searchValue !== undefined)
            {
              
              const data = await FetchFilteredUsersPageable({searchValue, page});
             
              setUsers(data);
            }
            else{
              if(tagValue !== null && tagValue !== undefined && tagValue !== "")
              {
                
              
                const filteredData = await FetchFilteredByTagUsers({tagValue});
                setUsers(filteredData);
                
              }

                
            }

           
          } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data");
          }
          
        };
    
        fetchData();
      }, [tagValue, searchValue, page]);


    const onChange = (e : any) =>{
        setSearchValue(e.target.value);
        setPage(0);
    }

    const {viewportWidth} = useContext(ThemeContext);

    const handleFilter = () => {
      setFilterIcon(!filterIcon);
    } 

    const handleRatingButton = () => {
      setRatingButton(!ratingButton)
      setUsers(users.sort(function(a,b){ return a.rating - b.rating}).reverse())
    }

    return (
     
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
                        <button className='iconInsideSearch'><CiSearch id='SearchIcon' /></button>
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

                {users.filter((user) => user.email !== me.email).map((user) => (
                  
                  <TeacherCard key={user.id} user={user}/>
                  // <div>
                  //   hello
                  // </div>
                ))}
              </main>
            )}
            <PageSwitcher page= {page} setPage={setPage} searchValue={searchValue} tag={tagValue}/>
      </div>   
     
    )
}

export default SearchPage

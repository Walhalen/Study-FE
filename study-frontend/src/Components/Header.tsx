import React, { useContext, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import '../cssFiles/mainMenu.css'
import { CiSearch } from "react-icons/ci";
import { LuSearchX } from "react-icons/lu";
import { Menu } from './Menu';
import { CgProfile } from "react-icons/cg";
import { BsFilterLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { largeScreenMenu, routes, smallScreenMenu } from '../constants';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import FilterDropDown from './FilterDropDown';
import { ThemeContext } from '../Context/ThemeContext';

interface Option {
  label: string;
  value: string;
}

interface MenuPage{
  name: string,
  rout: string, 
  style: string,
 
}

type Props = {
  handleFaBar: ()=>void,
  handleFilterDropDown: ()=>void
  handleProfileBar: () => void
  filterDropDown : boolean
}

const Header = ({handleFaBar, handleProfileBar, handleFilterDropDown, filterDropDown}: Props) => {
  const {viewportWidth} = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState("");
  const navigator = useNavigate();


  const pages : MenuPage[] =  largeScreenMenu


  

  return (
    <div className='closedSideBar'>
      {viewportWidth < 780 ? (
        <React.Fragment>
          <div className='MenuIcon'>
            <HiMenuAlt2   onClick={handleFaBar} />
          </div>
          <div className='closedSideBarText'>
            Study
          </div>
          <button id='SearchIconBox' onClick={()=>{
             navigator(`/search/`, {state :{searchInfo : "", tagName : ""}} )
          }}>

            <CiSearch id='SearchIcon' />

          </button >
        </React.Fragment>
      ) : (
        <React.Fragment>
          {viewportWidth < 1250 ? 
          (
            <React.Fragment>
              <div className='MenuIcon'>
                <HiMenuAlt2   onClick={handleFaBar} />
              </div>
              <div className='closedSideBarText'>
                Study
              </div>

              
              
              <div className='SearchBarField' style={{height: "100%"}}>
                <input type="text" placeholder="Search" className="SearchBar" value={searchValue} onChange={(e) =>{          
                  setSearchValue(e.target.value);
                  console.log("hi")
                  if(e.target.value!== "")
                  {
                    const dataForSent = {
                      "searchInfo" : e.target.value
                    } 
                    navigator(`/search`, { state: dataForSent} )
                  }   
                }}/>
                <button className='iconInsideSearch' ><CiSearch id='SearchIcon' /></button>
              </div> 
              <div className='ProfileIcon'>
                <CgProfile onClick={handleProfileBar} />
              </div>
            </React.Fragment>
          ): 
          (
            <React.Fragment>
              <div className='closedSideBarText'>
                Study
              </div>

              <Menu handleFaBar={() => {}} pages={pages} style='NavBarField'/>
              

              {/* <div className='filterField' >
                <button className='filterButton'>
                  filters
                </button>
              </div> */}
              <div style={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems: "center"}}>
                  <div className='SearchBarField'>
                    <input type="text" placeholder="Search" className="SearchBar" value={searchValue} onChange={(e) =>{          
                      setSearchValue(e.target.value);
                      
                      if(e.target.value!== "")
                      {
                        const dataForSent = {
                          "searchInfo" : e.target.value
                        } 
                        navigator(`/search`, { state: dataForSent} )
                      }   
                    }}/>
                    <button className='iconInsideSearch' ><CiSearch id='SearchIcon' /></button>
                  </div>
                  <div style={{overflow: 'hidden', display: 'flex', justifyContent:'center'}}>
                      <button className='filterButton' onClick={handleFilterDropDown}>
                        {filterDropDown ? <RiArrowDropUpLine /> 
                        : <RiArrowDropDownLine />}
                   
                      </button>
                      {filterDropDown &&   
                        <div style={{  position: 'absolute', marginTop: "25px", marginRight: "5px", zIndex:1}}>
                          <FilterDropDown/> 
                        </div>        
                      }
                  </div>

                  

              </div>

              <button className='ProfileIcon'>
                <CgProfile onClick={handleProfileBar} />   
              </button>
            </React.Fragment>
          )}

        </React.Fragment>
      )}
    </div> 
  )
}

export default Header

import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    name : string
    color : string
}




const TagCardFilterDropDown = ({name, color}: Props) => {
  const navigator = useNavigate();
  const handleFilter = () => {
    console.log("clicked");

    if(window.location.pathname === "/search"){
      navigator(`/search`, {state: {
        "tagName" : name
      }, replace: true} )
      console.log(window.location.pathname)
      window.location.reload()
    }
    else
    {
      navigator(`/search`, {state: {
        "tagName" : name
      }, replace: true} )
    }
  }

  return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <button className='tagCard' style={{width:"100%", padding:"15px"}} onClick={handleFilter}>
          <div className='tagColorDot' style={{ backgroundColor: color }}></div>
          {name}
        </button>
      </div>

  
    )
  }

export default TagCardFilterDropDown

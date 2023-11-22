import React from 'react'

type Props = {
    name : string
    color : string
}

const TagCardFilterDropDown = ({name, color}: Props) => {
    return (
      <button className='tagCard' style={{width:"100%", padding:"15px"}}>
          <div className='tagColorDot' style={{ backgroundColor: color }}></div>
          {name}
      </button>
  
    )
  }

export default TagCardFilterDropDown

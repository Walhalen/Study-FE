import React from 'react'
import { FaBars } from 'react-icons/fa'

type Props = {
  handleFaBar: ()=>void
}

const ClosedMenu = ({handleFaBar}: Props) => {
  return (
    <div className='closedSideBar'>
        <div className= 'FlexableContainerHorizontal'>
            <div className='MenuIcon'>
                <FaBars onClick={handleFaBar}/>
            </div>
            
            <div className='closedSideBarText'>
                Study
            </div>
        </div>
        

    </div>
  )
}

export default ClosedMenu

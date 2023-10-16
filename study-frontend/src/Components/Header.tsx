import React from 'react'
import { FaBars } from 'react-icons/fa'
import '../cssFiles/mainMenu.css'

type Props = {
  handleFaBar: ()=>void
}

const Header = ({handleFaBar}: Props) => {
  return (
    <div className='closedSideBar'>
        <div className= 'FlexableContainerHorizontal'>
            <div className='MenuIcon'>
                <FaBars onClick={handleFaBar}/>
            </div>
            
            <div className='closedSideBarText'>
                Study
            </div>
            {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
        </div>
        

    </div>
  )
}

export default Header

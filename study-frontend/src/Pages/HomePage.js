import React, { useState } from 'react'
import { Menu } from '../Components/Menu'
import ClosedMenu from '../Components/ClosedMenu';

const HomePage = () => {

    const [clickedFa, setClickedFa] = useState(false);

    const handleFaBar = () => setClickedFa(!clickedFa) 
  

    return (
        <div className={ clickedFa ? 'FlexableContainerHorizontal' : 'FlexableContainerVertical'}>
            <div>
                {clickedFa ? <Menu handleFaBar={handleFaBar}/> : <ClosedMenu handleFaBar={handleFaBar}/>}
            </div>
            
            <div>
                Home Page
            </div>
        </div>
    )
}

export default HomePage

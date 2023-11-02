import React, { useState } from 'react'
import { Menu } from '../Components/Menu'
import ClosedMenu from '../Components/Header';

const HomePage = () => {

    const [clickedFa, setClickedFa] = useState(false);

    const handleFaBar = () => setClickedFa(!clickedFa) 
  

    return (
        <div>
            <header className='header'>
                <ClosedMenu handleFaBar={handleFaBar}/>
            </header>
            
            <div className={ clickedFa ? 'FlexableContainerHorizontal' : 'FlexableContainerVertical'}>
                {clickedFa && <Menu handleFaBar={handleFaBar}/> }
                <div>
                    Home Page
                </div>
            </div>
        </div>
    )
}

export default HomePage

import { FC, PropsWithChildren, createContext } from 'react';
import React, {useState} from 'react'



interface ThemeContextInterface{
    viewportWidth: number
    
}

export const ThemeContext = createContext<ThemeContextInterface>({viewportWidth: 12});



export const ThemeContextProvider : FC<PropsWithChildren> = ({children}) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
    React.useEffect(() => {
  
      window.addEventListener("resize", () => setViewportWidth(window.innerWidth));
      console.log("resize")
  
    }, []);

    return (
        <ThemeContext.Provider value={{
            viewportWidth
        }}>
            <div>{children}</div>
        </ThemeContext.Provider>
    )
}


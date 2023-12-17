import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AppWrapper } from "./Wrapper/AppWrapper";
import { ThemeContextProvider } from "./Context/ThemeContext";



function App() {
  
  return (
    <Router> 
      <AppWrapper>
        <ThemeContextProvider>
          <AppRoutes/>
        </ThemeContextProvider>  
      </AppWrapper>
    </Router>
  );
}

export default App;

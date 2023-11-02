import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AppWrapper } from "./Wrapper/AppWrapper";


function App() {
  return (
    <Router> 
      <AppWrapper>
        <AppRoutes/>
      </AppWrapper>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";

import axios from 'axios'
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AppWrapper } from "./Wrapper/AppWrapper";


function App() {
  return (
    <AppWrapper>
      <Router>
          <AppRoutes/>
      </Router>
   </AppWrapper>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import FetchAllUsers from "./FetchFunctions/User/FetchAllUsers";
import axios from 'axios'
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <Router>
        <AppRoutes/>
    </Router>
  );
}

export default App;

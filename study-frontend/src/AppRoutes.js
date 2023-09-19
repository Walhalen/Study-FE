import React from 'react'
import { routes } from './constants'
import SearchPage from './Pages/SearchPage'
import { Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path={routes.searchPage} element={<SearchPage/>} />

    </Routes>
  )
}

export default AppRoutes; 

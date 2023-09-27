import React from 'react'
import { routes } from './constants'
import SearchPage from './Pages/SearchPage'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import FavoriteTeachersPage from './Pages/FavoriteTeachersPage';
import HistoryPage from './Pages/HistoryPage';
import LogInAndSignIn from './Pages/LogInAndSignIn';


export const AppRoutes = () => {
  return (
    <Routes>
        <Route path={routes.login} element={<LogInAndSignIn/>} />
        <Route path={routes.searchPage} element={<SearchPage/>} />
        <Route path={routes.home} element={<HomePage/>} />
        <Route path={routes.history} element={<HistoryPage/>} />
        <Route path={routes.favorite} element={<FavoriteTeachersPage/>} />
    </Routes>
  )
}

export default AppRoutes; 

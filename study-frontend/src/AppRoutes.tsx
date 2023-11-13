import React, {useEffect} from 'react'
import { routes } from './constants'
import SearchPage from './Pages/SearchPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import FavoriteTeachersPage from './Pages/FavoriteTeachersPage';
import HistoryPage from './Pages/HistoryPage';
import LogInAndSignIn from './Pages/LogInAndSignIn';
import { MyScreenBuilder } from './Pages/MyScreenBuilder';
import PrivateRoute  from './PrivateRoute';
import useJWTStore from './JWTStorage'
import DefaultRout from './Helper/DefaultRout';
import { SignInTagsSelector } from './Components/SignInTagsDescriptionSelector';



type Props = {
  username: string;
  email : string;
  password: string;

}
export const AppRoutes = () => {
  // const { isAuthenticated } = useJWTStore();
  const isAuthenticated = useJWTStore((state) => state.isAuthenticated)

  return (
      <Routes>
          <Route path={routes.login} element={<LogInAndSignIn/>} />   
          
          
          <Route element={<PrivateRoute isAuthenticated = {isAuthenticated}/>}>
            <Route path={routes.searchPage} element={<SearchPage/>} />
            <Route path={routes.home} element={<HomePage/>} />
            <Route path={routes.history} element={<HistoryPage/>} />
            <Route path={routes.favorite} element={<FavoriteTeachersPage/>} />
          </Route>
      </Routes>

  )
}

export default AppRoutes; 

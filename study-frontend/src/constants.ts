import { GoHome, GoSignIn, GoPerson, GoHeart, GoHistory, GoSearch } from 'react-icons/go';

export const routes = {

    default: '/',
    login: '/',
    tagSelect : '/signIn/selectTags',
    registration: '/registration',
    home: '/home' ,
    searchPage: '/search',
    favorite: '/favorites',
    history: '/history'
}


export const pbrouts = [
    routes.default,
    routes.login,
    routes.tagSelect
]


// type Icons = {
//     home: JSX.Element;
//     login: JSX.Element;
//     tagSelect: JSX.Element;
//     registration: JSX.Element;
//     searchPage: JSX.Element;
//     favorite: JSX.Element;
//     history: JSX.Element;
//   };

// export const icons : Icons = {
//     home: <GoHome />,
//     login: <GoSignIn />,
//     tagSelect: <GoPerson />,
//     registration: <GoPerson />, 
//     searchPage: <GoSearch />,
//     favorite: <GoHeart />,
//     history: <GoHistory />,
//   };
  
  
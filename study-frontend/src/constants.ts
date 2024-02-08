import { GoHome, GoSignIn, GoPerson, GoHeart, GoHistory, GoSearch } from 'react-icons/go';

export const routes = {

    default: '/',
    login: '/',
    tagSelect : '/signIn/selectTags',
    registration: '/registration',
    home: '/home' ,
    searchPage: '/search',
    favorite: '/favorites',
    history: '/history',
    profilePage: '/profilePage',
    teacherOverviewPage: "/teacherOverview" 
}


export const pbrouts = [
    routes.default,
    routes.login,
    routes.tagSelect
]



interface MenuPage{
    name: string,
    rout: string, 
    style: string,
   
  }



export const largeScreenMenu : MenuPage[] = [
    {
        name: "Home Page",
        rout: "home",
        style: "NavBarButtons",
  
    },
    {
        name: "Messeges",
        rout: "searchPage",
        style: "NavBarButtons",
  
    },
    {
        name: "Favorites",
        rout: "favorites",
        style: "NavBarButtons",
  
    },
    {
        name: "History",
        rout: "history",
        style: "NavBarButtons",
  
    },
]
export const largeScreenProfileMenu : MenuPage[] =[
    {
        name: "Your Profile",
        rout: "profile",
        style: "SideBarButton",

    },
    {
        name: "Sign out",
        rout: "signOut",
        style: "SignOutButton"
    }
]

export const mediumScreenMenu : MenuPage[] = [
    {
        name: "Home Page",
        rout: "home",
        style: "SideBarButton",

    },
    {
        name: "Messages",
        rout: "searchPage",
        style: "SideBarButton",

    },
    {
        name: "Favorites",
        rout: "favorites",
        style: "SideBarButton",

    },
    {
        name: "History",
        rout: "history",
        style: "SideBarButton",
    },
]

export const mediumScreenProfileMenu : MenuPage[] = [


    {
        name: "Your Profile",
        rout: "profile",
        style: "SideBarButton",

      },
      {
        name: "Sign out",
        rout: "signOut",
        style: "SignOutButton",

      },
]


export const smallScreenMenu : MenuPage[] = [
    {
        name: "Home Page",
        rout: "home",
        style: "SideBarButton",

      },
      {
        name: "Messages",
        rout: "searchPage",
        style: "SideBarButton",

      },
      {
        name: "Favorites",
        rout: "favorites",
        style: "SideBarButton",

      },
      {
        name: "History",
        rout: "history",
        style: "SideBarButton",

      },
      {
        name: "Your Profile",
        rout: "profile",
        style: "SideBarButton",

      },
      {
        name: "Sign out",
        rout: "signOut",
        style: "SignOutButton",

      },
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
  
  
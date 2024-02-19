import { Tag } from "./TagInterfaces"

export  interface User {
    id : number,
    username: string,
    email : string
    tags : Array<Tag>,
    favorites: Array<User>, 
    description : string, 
    rating : number
}


export interface FavoriteOrHistoryUserDto{
    username: string,
    email: string, 
    tags: Array<Tag>,
    description: string,
    rating: number
}

export  interface UserDto {
    username: string,
    email : string,
    tags : Array<Tag>,
    favorites: Array<FavoriteOrHistoryUserDto>,
    description : string, 
    rating : number
}

export interface MeDto {
    username: string,
    email: string,
    rating: number,
    tags: Array<Tag>,
    favorites: Array<FavoriteOrHistoryUserDto>,
    history: Array<FavoriteOrHistoryUserDto>,
    description: string 
}
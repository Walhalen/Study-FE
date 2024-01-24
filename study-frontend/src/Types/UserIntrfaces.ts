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

export  interface UserDto {
    username: string,
    email : string,
    tags : Array<Tag>,
    favorites: Array<User>,
    description : string, 
    rating : number
}

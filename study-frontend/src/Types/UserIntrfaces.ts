import { Tag } from "./TagInterfaces"

export  interface User {
    id : number,
    username: string,
    email : string
    tags : Array<Tag>
    description : string, 
    rating : number
}

export  interface UserDto {
    username: string,
    email : string
    tags : Array<Tag>
    description : string, 
    rating : number
}

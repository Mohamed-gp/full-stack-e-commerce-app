import { ObjectId } from "mongoose"

interface user {
    username? : string,
    email : string,
    password : string,
    isAdmin? : boolean,
    _id? : ObjectId
}




export type {user}
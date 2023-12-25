import { TUSER } from "./users.interface";
import User from "./users.model";

const createUser=async(payload:TUSER)=>{
    const result = await User.create(payload)
    return result
}


export const userServices={createUser}
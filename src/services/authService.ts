import User from "../models/user";
import { getFileData, saveFileData } from "../config/fileDataLayer";
import LoginDTO from "../DTO/loginDto";
import jwt from "jsonwebtoken";


export default class AuthService {

    public static async login(userData:LoginDTO):Promise<Error|string>{
        const { username, password } = userData
        const users:User[] = await getFileData<User>('users') as User[]
      
        if(!users) throw new Error("500: No users at all was found in the system")
       
        const user = users.find(u=>u.username == username)

        if (!user) throw new Error("401: No user with that username")
        
        // HASH THE F PASSWORDDDDDD
        if(user.password != password) throw new Error("403: Wrong passwod")
        const payload = {
            username,
            id: user.id,
            avatarUrl: user.avatarUrl,
            email: user.email,
            isLockedAccount: user.isLockedAccount
        }
        return jwt.sign(payload, process.env.TOKEN_SECRET as string,{
            expiresIn:"10m"
        })
    }

}

// DO YOU REMEMBER DataTransferObject?!
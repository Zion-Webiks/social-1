import NewUserDTO from "../DTO/newUserDto";
import fs from 'fs/promises'
import User from "../models/user";
import { getFileData, saveFileData } from "../config/fileDataLayer";

export default class UserService {

    public static async createNewUser(newUser:NewUserDTO):Promise<boolean>{
        // create a new User() object
        const { username, password, email, birthday, avatarUrl } = newUser
        const user: User = new User(
            username, password, email, birthday, avatarUrl
        )
        // add it to the user file
        // get the file as an array of objects
        let users: User[] = await getFileData<User>('users') as User[]
        if(!users) users = []
        console.log(users)
        // push
        users.push(user)
        // save the array back to the file
        return await saveFileData<User>('users', users)
    }

}

// DO YOU REMEMBER DataTransferObject?!
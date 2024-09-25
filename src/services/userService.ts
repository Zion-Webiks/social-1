import NewUserDTO from "../DTO/newUserDto";
import fs from 'fs/promises'
import User from "../models/user";

class UserService {

    public static async createNewUser(newUser:NewUserDTO):Promise<void>{
        // create a new User() object
        const { username, password, email, birthday, avatarUrl } = newUser
        const user: User = new User(
            username, password, email, birthday, avatarUrl
        )
        // add it to the user file
            // get the file as an array of objects

            // push

            // save the array back to the file
    }
}

// DO YOU REMEMBER DataTransferObject?!
import User from "../models/user";
import { getFileData, saveFileData } from "../config/fileDataLayer";
import NewPostDTO from "../DTO/newPostDto";
import Post from "../models/post";

export default class PostService {

    public static async createNewPost(newPost:NewPostDTO):Promise<boolean>{
        const { authorId, content, hashtags, ref } = newPost
        const post: Post = new Post(
            authorId, content, hashtags, ref
        )
      
        let posts: Post[] = await getFileData<Post>('posts') as Post[]
        if(!posts) posts = []
       
        posts.push(post)
        
        return await saveFileData<Post>('posts', posts)
    }

}

// DO YOU REMEMBER DataTransferObject?!
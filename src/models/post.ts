import { v4 } from "uuid"

class Post {
     public id: string
     public createdAt:  Date
     public likedBy: string[] = []

     constructor(
        public authorId: string,
        public content:string,
        public hashtags:string[],
        public ref?:string
    ) {
        this.id = v4()
        this.createdAt = new Date()
     }
}

export default Post
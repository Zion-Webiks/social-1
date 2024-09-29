import exp, { Request, Response, Router } from 'express'
import PostService from '../services/postService'
import NewPostDTO from '../DTO/newPostDto'
import { getFileData } from '../config/fileDataLayer'
import Post from '../models/post'

const router:Router = exp.Router()


router.get('/',  async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const posts = await getFileData<Post>('posts')
        res.status(200).json({
            err: false,
            message: "Here's all your posts",
            data: posts
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

// protected route
router.post('/', async (
    req:Request<any, any, NewPostDTO>,
    res:Response
):Promise<void> => {
    try {
        await PostService.createNewPost(req.body)
        res.status(200).json({
            err: false,
            message: 'Post saved successfully',
            data: undefined
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

// query params: ?title=x&date=23/04/2015
router.get('/search', async (
    req:Request<any, any, any, Post>,
    res:Response
):Promise<void> => {
    try {
        const { content } = req.query
        const posts:Post[] = await getFileData('posts') as Post[]
        const results = posts.filter(p => p.content.includes(content))
        res.status(200).json({
            err: false,
            message: "Here's a list of post with your topic of choice",
            data: results
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

router.get('/:id', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const posts = await getFileData<Post>('posts')
        const post = posts!.find(p => p.id)
        res.status(200).json({
            err: false,
            message: "Here's your post",
            data: post
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

// protected route
router.patch('/like', async (
    req:Request<any, any, {postId:string, userId:string}>,
    res:Response
):Promise<void> => {
    try {
        const {postId, userId} = req.body
        const posts = await getFileData('posts') as Post[]
        const post:Post = posts.find(p => p.id == postId) as Post
        let opperationType:string
        if (post.likedBy.includes(userId)) {
            post.likedBy = post?.likedBy.filter(u => u != userId)
            opperationType = 'unlike'
        } else {
            post?.likedBy.push(userId)
            opperationType = 'like'
        }
        res.status(200).json({
            err: false,
            message: `You've successfully ${opperationType}d that post!`,
            data: undefined
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

export default router





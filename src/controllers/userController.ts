import exp, { Request, Response, Router } from 'express'
import UserService from '../services/userService'
import NewUserDTO from '../DTO/newUserDto'

const router:Router = exp.Router()


router.post('/register', async (
    req:Request<any, any, NewUserDTO>,
    res:Response
):Promise<void> => {
    try {
        const result = await UserService.createNewUser(req.body)
        if (result) {
            res.status(201).json({
                err: false,
                message: 'Welcome '+ req.body.username,
                data: undefined
            })
        }else{
            throw new Error("Cant Save New User to the file");
        }
        
    } catch (err) {
        res.status(400).json({
            err: true,
            message: err ||'I was way too lazy to change the default message',
            data: null
        })
    }
})

// protected route
router.post('/follow', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
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

//  ?key=value
router.get('/search', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
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

// protected route
// ?type=MINE|ELSE
router.get('/profile', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
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

// protected route
// ?type=MINE|ELSE
router.get('/followers', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
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

// protected route
// ?type=MINE|ELSE
router.get('/following', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
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
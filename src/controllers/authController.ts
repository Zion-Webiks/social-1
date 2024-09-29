import exp, { Request, Response, Router } from 'express'
import LoginDTO from '../DTO/loginDto'
import AuthService from '../services/authService'

const router:Router = exp.Router()

router.post('/login', async (
    req:Request<any,any,LoginDTO>,
    res:Response
):Promise<void> => {
    try {
        const token = await AuthService.login(req.body)
        res.cookie("token",token).status(200).json({
            err: false,
            message: "here's your token bruh",
            data: token
        })
    } catch (err) {
        console.log(err as Error)
        const [status, msg] = (err as Error).message.split(":")
        res.status(Number(status)).json({
            err: true,
            message: msg || 'Sorry no token today, try again tomorrow',
            data: null
        })
    }
})


// protected route
router.delete('/logout', async (
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
import { Request } from 'express'
import TokenPayloadDTO from '../DTO/tokenPayloadDTO'

export default interface RequestWithUser extends Request{
    user:TokenPayloadDTO
}
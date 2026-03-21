import jwt from "jsonwebtoken"
import { config } from "dotenv"

config()

const { verify } = jwt

export const verifyToken = (...allowedRoles) => {

    return (req,res,next)=>{

        try{

            const token = req.cookies?.token

            if(!token){
                return res.status(401).json({message:"Please login"})
            }

            const decodedToken = verify(token,process.env.SECRET_KEY)

            if(!allowedRoles.includes(decodedToken.role)){
                return res.status(403).json({message:"Unauthorized"})
            }

            req.user = decodedToken

            next()

        }
        catch(err){
            res.status(401).json({message:"Invalid Token"})
        }

    }

}
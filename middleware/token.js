import  jwt  from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

//token generation function
export const  genrateToken=({data,expiresIn})=>{
    const token =jwt.sign({payload:data},process.env.JWT_SECRET,{expiresIn:expiresIn})
return token
}


// verify token function
export const verify=(req,res,next)=>{
    let token=req.headers?.cookie?.slice(6)


    
    console.log(token,'line 15')
    console.log(process.env.JWT_SECRET ,'key')
    
    if(!token){
        console.log('token nahi mila')
        return res.send('you are not allowed')
    }
    

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.send('Your token has Expired-')
        }
        req.user=user
        console.log(user)
        next()
    })
    
}

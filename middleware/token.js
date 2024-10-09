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
    console.log('headers===>',req.headers)
    let token=req.headers?.authorization.split(' ')[1]
    


    
    console.log(token,'line 15')
    console.log(process.env.JWT_SECRET ,'key')
    
    if(!token){
        console.log('token nahi mila')
        return res.json({message:'you are not allowed'})
    }
    
    
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.json({message:'Your token has Expired-'})
            
        }
        req.user=user
        console.log(user)
        next()
    })
    
}

//verify token Authorization
export const verifyAuth=(req,res,next)=>{
    
    verify(req,res,()=>{
        console.log(req.user)    
        console.log(req.params.id)    
        if(req.user.payload._id==req.params.id){
            next()
        }
        else{
            return res.send('you are not allowed to do that')
        }
    })


    
   
    

    
    
}

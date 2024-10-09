import { genrateToken } from '../../middleware/token.js';
import UserSchema from '../../Models/user.js'
import bcrypt, { compareSync } from 'bcrypt'

export const loginController=async(req,res)=>{
    
    const {email,password}=req.body;
    //check form feilds
    if (!email || !password)return res.status(400).json({status:false,message:'Please Enter email or Password'})
    //find user
    const checkUser= await UserSchema.findOne({email:email})
    if(!checkUser) return  res.status(404).json({status:false,message:'No user found'})
//check user password
       const checkPassword= bcrypt.compareSync(password,checkUser.password)
    if (!checkPassword) return res.status(501).json({status:false,message:'Invalid Crdeintials'})
        checkUser.password=undefined
    console.log(checkUser)

    //token generation
    const token= genrateToken({data:checkUser,expiresIn:'240s'})

    res.cookie('token',token,{http:true})
    res.setHeader('token', 'Beares'+" "+token);
    res.status(200).json({
        status:true,
        message:"user login Succefulyy",
        data :checkUser,
        token:token
    })

}
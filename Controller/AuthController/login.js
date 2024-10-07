import { genrateToken } from '../../middleware/token.js';
import userSchema from '../../Models/user.js'
import bcrypt, { compareSync } from 'bcrypt'

export const loginController=async(req,res)=>{
    
    const {email,password}=req.body;
    //check form feilds
    if (!email || !password)return res.send('Please Enter email or Password')
    //find user
    const checkUser= await userSchema.findOne({email:email})
    if(!checkUser) return  res.send('no user found')
//check user password
       const checkPassword= bcrypt.compareSync(password,checkUser.password)
    if (!checkPassword) return res.send('invalid Credentials')
        checkUser.password=undefined
    console.log(checkUser)

    //token generation
    const token= genrateToken({data:checkUser,expiresIn:'240s'})

    res.cookie('token',token,{http:true})
    res.setHeader('token', 'Beares'+" "+token);
    res.json({
        data:checkUser,
        token:token
    })

}
import bycrypt from 'bcrypt'
import UserSchema from '../../Models/user.js'
import { genrateToken } from '../../middleware/token.js'


export const signupController = async (req, res) => {

    const { name, email, password, phone, address, country } = req.body

    try {
        // check all required fileds
        if (!name || !email || !password || !phone || !address || !country) {
            return res.status(400).json({
                status:false,
                message:'Please Complete All feilds'
            })
        }

        //check user in database
        const checkUser = await UserSchema.findOne({ email: email })
        console.log(checkUser)
        if (checkUser) return res.status(500).json({
            status:false,message:'User Already Exist'
        })

        // password hashing 
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        //create user
        const user = await new UserSchema({
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone,
            address: address,
            country: country

        })

        //send data 
        const userSend = await user.save(user)
        if (!userSend) return res.send(userSend)
        userSend.password = undefined
        //generate token
        const token = genrateToken({ data: userSend, expiresIn: '24h' })

        // res.setHeaders('token', token)
        // res.cookie('token',token,{ maxAge: 60000,httpOnly:true})
        // response.setHeader('charset', 'utf-8');
        // req.headers.authorization='Bearer '+token

        
        return res.status(200).json({
            status:true ,
            message:'user register succesfully',
            token:token
        })

    } catch (error) {
        return res.status(501).json({status:false,message:error})

    }


}
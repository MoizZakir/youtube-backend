import bycrypt from 'bcrypt'
import UserSchema from '../../Models/user.js'
import { genrateToken } from '../../middleware/token.js'


export const signupController = async (req, res) => {

    const { name, email, password, phone, address, country } = req.body

    try {
        // check all required fileds
        if (!name || !email || !password || !phone || !address || !country) {
            return res.send('please complete your information')
        }

        //check user in database
        const checkUser = await UserSchema.findOne({ email: email })
        console.log(checkUser)
        if (checkUser) return res.send('user already exist')

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
        if (userSend.errors) return res.send(userSend)
        userSend.password = undefined
        //generate token
        const token = genrateToken({ data: userSend, expiresIn: '24h' })

        res.cookie('token', token, { http: true })

        return res.json({
            data: userSend,
            token: token
        })

    } catch (error) {
        return res.send(error)

    }


}
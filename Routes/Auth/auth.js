import express from "express";
import { signupController } from "../../Controller/AuthController/signup.js";
import { loginController } from "../../Controller/AuthController/login.js";
import { verify } from "../../middleware/token.js";
const AuthRoute=express.Router()
AuthRoute.get('/new',verify,(req,res)=> {
    res.send('welcome home')})
AuthRoute.post('/signup',signupController)
AuthRoute.post('/login',loginController)
export { AuthRoute}
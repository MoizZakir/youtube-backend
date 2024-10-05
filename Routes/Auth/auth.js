import express from "express";
import { signupController } from "../../Controller/AuthController/signup.js";
import { loginController } from "../../Controller/AuthController/login.js";
const AuthRoute=express.Router()
AuthRoute.get('/signup',signupController)
AuthRoute.get('/login',loginController)
export { AuthRoute}
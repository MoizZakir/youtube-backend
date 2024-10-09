import express from "express";
import { homeController } from "../../Controller/HomeController/home.js";
import { verify } from "../../middleware/token.js";
const HomeRoute=express.Router()

HomeRoute.get('/',verify,homeController)

export default HomeRoute
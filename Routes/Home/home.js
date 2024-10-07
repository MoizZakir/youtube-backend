import express from "express";
import { homeController } from "../../Controller/HomeController/home.js";
const HomeRoute=express.Router()

HomeRoute.get('/',homeController)

export default HomeRoute
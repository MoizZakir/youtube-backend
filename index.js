import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import {AuthRoute} from './Routes/Auth/auth.js';
import { dbConnection } from './utils/Connection.js';
import cookieParser from "cookie-parser"
import HomeRoute from './Routes/Home/home.js';
import VideoRoute from './Routes/Video/video.js';



const app=express();
dbConnection()
app.use(cookieParser())
app.use(express.json())


dotenv.config()
const port=process.env.PORT 

app.use(cors())

app.use('/api/auth',AuthRoute)
app.use('/api/home',HomeRoute)
app.use('/api/video',VideoRoute)
app.listen(port,()=>{
    console.log('server Started at port ',port)
})



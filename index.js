import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import {AuthRoute} from './Routes/Auth/auth.js';
import { dbConnection } from './utils/Connection.js';
import cookieParser from "cookie-parser"
import HomeRoute from './Routes/Home/home.js';
import VideoRoute from './Routes/Video/video.js';
import UserRoute from './Routes/User/user.js';



const app=express();


dotenv.config()
const port=process.env.PORT 
app.use(cors()) 
dbConnection()
// app.use(cookieParser())
app.use(express.json())




app.use('/api/auth',AuthRoute)
app.use('/',(req,res)=>{
res.send('succefully run')
})
app.use('/api/home',HomeRoute)
app.use('/api/video',VideoRoute)
app.use('/api/user',UserRoute)
app.listen(port,()=>{
    console.log('server Started at port ',port)
})



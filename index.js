import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import {AuthRoute} from './Routes/Auth/auth.js';
import { dbConnection } from './utils/Connection.js';
import cookieParser from "cookie-parser"


const app=express();
dbConnection()
app.use(cookieParser())
app.use(express.json())


dotenv.config()
const port=process.env.PORT 

app.use(cors())

app.use('/api/auth',AuthRoute)
app.listen(port,()=>{
    console.log('server Started at port ',port)
})



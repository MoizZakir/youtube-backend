import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import {AuthRoute} from './Routes/Auth/auth.js';


const app=express();


dotenv.config()
const port=process.env.PORT 

app.use(cors())
// app.use('/',(req,res)=>{
//     res.send('welcome')
// })
app.use('/api/auth',AuthRoute)
app.listen(port,()=>{
    console.log('server Started at port ',port)
})



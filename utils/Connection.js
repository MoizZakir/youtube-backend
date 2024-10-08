import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.MONGO_DB_URI)
export const dbConnection = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
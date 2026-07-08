import mongoose from "mongoose"
import dotenv from "dotenv"

const dbconnect =async()=>{
    try {
       
        await mongoose.connect(process.env.MONGODB)
        console.log("Mongo connected for Auth");
    } catch (error) {
        console.log(`Mongo not connected for Auth : ${error}`);
    }
}

export default dbconnect;
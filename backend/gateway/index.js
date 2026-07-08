import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy"

dotenv.config();

const port=process.env.PORT;

const app=express();

app.use("/auth",proxy(process.env.Auth_url));

app.get("/",(req,res)=>{
  res.json({message:"gateway"})  
})

app.listen(port,()=>{
    console.log(`server is running on PORT ${port}`);
})
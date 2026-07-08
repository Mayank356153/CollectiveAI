import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/db.js";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1"]); // this is error in node after version 19 in which it resolve to dns server 127.0.0.53 so implicity set dns server in while server starting 

dotenv.config();

const port=process.env.PORT;

const app=express();

app.get("/",(req,res)=>{
  res.json({message:"auth"})  
})

app.listen(port,()=>{
    console.log(`server is running on PORT ${port}`);
    dbconnect()
})

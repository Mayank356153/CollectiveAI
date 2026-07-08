import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
  name:String,
  firebase_uid:{
    type:String,
    unique:true,
    require:[true,"User firebase unique id is required"]
  },
  email:{
    type:String,
    unique:[true,"User email should be unique"]
  }

},{
    timestamps:true,
    _id:true
})

const User=mongoose.model("User",userSchema);
export default User;
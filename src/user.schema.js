
import mongoose from "mongoose";

const userschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'name is reqired'],
            maxLength:[50,'name should less than 50 character'],
        },
        email:{
          type:String,
          unique: true,
        },
        password: String,
        age:Number,
    }
);
export default mongoose.model("user",userschema)
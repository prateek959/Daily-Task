import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String},
    blogId:{type:[mongoose.Schema.Types.ObjectId],ref:"blog"}
});

const User = mongoose.model('user',userSchema);

export default User;
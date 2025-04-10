import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    productName:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:String,required:true},
    rating:{type:Number,required:true}
});

const Task = mongoose.model("task",taskSchema);

export default Task;
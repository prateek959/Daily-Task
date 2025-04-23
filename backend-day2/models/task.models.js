import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{type:String, required:true},
    status:{type:String, enum:["Inprogress","done"], default:"done"},
});

const Task = mongoose.model('task',taskSchema);

export default Task;
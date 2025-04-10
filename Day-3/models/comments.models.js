import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    blogId:{type:mongoose.Schema.Types.ObjectId,ref:"blog"}
});

const Comment = mongoose.model("comment",commentSchema);

export default Comment;
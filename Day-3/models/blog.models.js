import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    title:{type:String,required:true},
    description:{type:String, required:true},
    comment:{type:[mongoose.Schema.Types.ObjectId],ref:"comment"}
});

const Blog = mongoose.model("blog",blogSchema);

export default Blog;


import mongoose from "mongoose";

const db = async(req, res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('DB connect successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"});    
    }
};

export default db;
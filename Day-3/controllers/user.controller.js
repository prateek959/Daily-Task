import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const data = await User.findOne({ email });
        if (data) {
            return res.status(400).json({ msg: "User is already exist" });
        }
        const hashpass = await argon2.hash(password);
        await User.create({
            name,
            email,
            password:hashpass
        });
        res.status(201).json({msg:"User register successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const data = await User.findOne({email});
        if(!data){
            return res.status(400).json({msg:"Email is invalid"});
        }
        const verify = await argon2.verify(password,data.password);
        if(!verify){
            return res.status(400).json({msg:"Password is invalid"});
        }
        const token = jwt.sign({id:data._id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"});
        res.status(200).json({msg:"User login successfully",token});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });  
    }
};

export {register, login};
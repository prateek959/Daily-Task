import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import User from '../models/user.models.js';

const register = async (req, res)=>{
    try {
        const {name, email, password, role} = req.body;
        const data = await User.findOne({email});
        if(data){
            return res.status(400).json({msg:"User already exists"});
        }

        const hashpass = await argon2.hash(password);

        await User.create({
            name,
            email,
            password:hashpass,
            role
        });

        res.status(201).json({msg:"User register successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"});
    }
};


const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Email is Invalid"});
        }

        const verify = await argon2.verify(password,user.password);

        if(!verify){
            return res.status(400).json({msg:"Password is Invalid"});
        }

        const token = jwt.sign({id:user._id, role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:'7d'});

        res.status(200).json({msg:"User is login successfully",token});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"}); 
    }
};

export {register, login};
import jwt from 'jsonwebtoken';

const checktoken = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: "User is Unauthorized" });
    }
    try {
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ msg: "User is Unauthorized" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        res.user = decode;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const checkRole = (...roles)=>{
    return async(req, res, next)=>{
        try {
            if(!roles.includes(req.user.role)){
                return res.status(401).json({ msg: "User is Unauthorized" });
            }
            next();
        } catch (error) {
            
        }
    }
};


export {checktoken, checkRole};
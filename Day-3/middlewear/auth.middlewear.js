
const checkToken = async(req, res, next)=>{
    try {
        const authHeader = req.headers.authorization || req.headers.Authorization;
        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(401).json({msg:"User is Unauthorized"});
        };
        const token = authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json({msg:"User is Unauthorized"})  
        }
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });   
    }
};


export {checkToken};
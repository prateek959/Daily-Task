import cron from 'node-cron';
let obj = {};
let requestLimit = 100;

cron.schedule("0 * * * *",()=>{
    obj = {};
    console.log('cron jobs run');
});

const limit = async (req, res, next) => {
    try {
        if (obj["request"] === undefined) {
            obj["request"] = 1;
        } else {
            obj["request"]++;
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const check = async (req, res, next) => {
    try {
        if (obj["request"] > requestLimit) {
            return res.status(429).json({ msg: "Too many request" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};


export { limit, check };
import Task from "../models/task.models.js";

const add = async (req, res) => {
    try {
        const { productName, category, price, rating } = req.body;
        await Task.create({
            productName,
            category,
            price,
            rating
        });
        res.status(201).json({ msg: "Item added successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const pagination = async (req, res) => {
    try {
        const { page } = req.query;
        const data = await Task.find({}).limit(page);
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const sorting = async (req, res) => {
    try {
        const { sort } = req.query;
        let val;
        if(sort == "ASC"){
            val = 1;
        }else{
            val = -1;
        }
        const data = await Task.find({}).sort(val);
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const filtering = async(req, res)=>{
    try {
       const {category, price, rating} = req.query;
       let obj = {};
       if(category){
        obj["category"] = { $regex: category, $options: "i" };;
       }
       if(price){
        obj["price"] = parseInt(price);
       }
       if(rating){
        obj["rating"] = rating;
       }

       const data = await Task.find(obj);
       res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" }); 
    }
};


const allFeature = async(req, res)=>{
    try {
        const {category, price, rating, sort, page} = req.query; 
        let val;
        if(sort == "ASC"){
            val = 1;
        }else{
            val = -1;
        }
        if(category){
            obj["category"] = { $regex: category, $options: "i" };;
           }
           if(price){
            obj["price"] = parseInt(price);
           }
           if(rating){
            obj["rating"] = rating;
           }
           const data = await Task.find(obj).limit(page).sort(val);
           res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });  
    }
};


export {add, pagination, sorting, filtering, allFeature};
import express from 'express';
import 'dotenv/config';
import multer from 'multer';

const app = express();
app.use(express.json());


const storage = multer.diskStorage({
    destination:function (req, file, cb){},
    filename: function (req, file, cb){}

})


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import {check, limit} from './middlewear/limit.middlewear.js';
const app = express();
app.use(express.json());
// const limiter = rateLimit({
//     windowMs: 1 * 60 * 60 * 1000,
//     limit: 100,
// });

// app.use(limiter);

// app.get('/',(req, res)=>{
//     res.send('Hello world');
// });

app.get("/", limit,check,(req, res) => {
    res.send("Hello World");
});


app.listen(3030, () => {
    console.log(`Server is running 3030`);
})
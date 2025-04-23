import express from 'express';
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

let timeout;
app.get('/debounce', (req, res) => {
    const {search} = req.query;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log(search);
        res.send(search);
    }, 5000);
});

app.listen(3030,()=>{
    console.log('Server is running on port');
})
import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';

const app = express();
// app.use(morgan(':method :url :response-time'));
if (process.env.NODE_ENV === "DEVELOPMENT") {
    app.use((req, res, next) => {
        console.log(`Method is ${req.method} and URL is ${req.originalUrl}`);
        next();
    })
};

app.get('/get', (req, res) => {
    res.send("Hello world");
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


app.listen(3030, () => {
    console.log(`Server is running on 3030`);
});
import express from 'express';
import 'dotenv/config';
import { rateLimit } from 'express-rate-limit'
import { db } from './config/db.js'
import taskRouter from './routes/task.routes.js';
import { checkToken } from './middlewear/auth.middlewear.js';
// import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
const limit = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 60
});

app.use(limit);
// dummy token
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXRsZSI6ImR1bW15IiwiaWF0IjoxNzQ1NDE2NzE1fQ.OXySVekLR9fzpPtn7kF5egu4wq3v6phJwSPwFaKL7qo"
app.use('/task',checkToken,taskRouter);

const PORT = process.env.PORT || 3030;
app.listen(PORT, async () => {
    await db();
    console.log(`Server is running ${PORT}`);
});
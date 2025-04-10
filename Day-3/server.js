import express from 'express';
import "dotenv/config";
import taskRouter from './routes/task.routes.js';
import db from './config/db.js';
import userRouter from './routes/user.routes.js';

const app = express();
app.use(express.json());

app.use("/task", taskRouter);
app.use("/user",userRouter);


const PORT = process.env.PORT;
app.listen(PORT, async () => {
    await db();
    console.log(`Server is running ${PORT}`);
})
import exress from 'express';
import 'dotenv/config';
import userRouter from './routes/user.routes.js';
import todoRouter from './routes/todo.routes.js';

const app = exress();
app.use(exress.json());

app.use('/user',userRouter);
app.use('/todo',todoRouter);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})
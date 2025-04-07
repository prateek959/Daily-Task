import exress from 'express';
import 'dotenv/config';
import userRouter from './routes/user.routes';

const app = exress();
app.use(exress.json());

app.use('/user',userRouter);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})
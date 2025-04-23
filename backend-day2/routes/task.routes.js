import express from 'express';
import { taskadd, updateTask } from '../controller/task.controller.js';


const taskRouter = express.Router();

taskRouter.post('/add',taskadd);
taskRouter.post('/update',updateTask);

export default taskRouter;
import express from 'express';
import { add, allFeature, filtering, pagination, sorting } from '../controllers/task.controller.js';

const taskRouter = express.Router();


taskRouter.post("/add",add);
taskRouter.get("/page",pagination);
taskRouter.get('/sort',sorting);
taskRouter.get('/filter',filtering);
taskRouter.get("allFeature",allFeature);


export default taskRouter;

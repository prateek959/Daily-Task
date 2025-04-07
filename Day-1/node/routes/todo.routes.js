import express from 'express';
import { checkRole, checktoken } from '../middlewear/auth.middlewear.js';
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from '../controller/todo.controller.js';

const todoRouter = express.Router();

todoRouter.post('/add',checktoken,checkRole(['admin','user']),createTodo);
todoRouter.get('/get',checktoken,checkRole(['admin','user']),getTodos);
todoRouter.get('/getbyId/:id',checktoken,checkRole(['admin','user']),getTodoById);
todoRouter.put('/update/:id',checktoken,checkRole(['admin','user']),updateTodo);
todoRouter.delete('/delete/:id',checktoken,checkRole(['admin','user']),deleteTodo);

export default todoRouter;
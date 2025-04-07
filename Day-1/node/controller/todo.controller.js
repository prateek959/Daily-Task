import Todo from '../models/todo.models.js';

const createTodo = async (req, res) => {

    try {
        const { title, description, completed } = req.body;
        const newTodo = new Todo({
            title,
            description,
            completed
        });

        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const getTodoById = async (req, res) => {

    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({ msg: 'Todo not found' });
        }

        res.status(200).json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const updateTodo = async (req, res) => {

    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        if (title) {
            todo.title = title;
        }

        if (description) {
            todo.description = description;
        }

        if (completed) {
            todo.completed = completed;
        }

        await todo.save();

        res.status(200).json({msg:"Todo update successfull"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg:"Internal server error"});
    }
};


const deleteTodo = async (req, res) => {
    
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg:"Internal server error"});
    }
};

export {createTodo, getTodos, getTodoById, updateTodo, deleteTodo};

import Task from "../models/task.models.js";


const taskadd = async (req, res) => {
    try {
        const { title, status } = req.body;
        await Task.create({
            title,
            status
        });
        res.status(201).json({ msg: "Task is created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server error" });
    }
};


const updateTask = async (req, res) => {
    try {
        const { title, status } = req.body;
        const id = req.params.id;
        const task = await Task.findById(id);
        if (title) {
            task.title = title;
        }

        if (status) {
            task.status = status;
        }

        await task.save();
        res.status(200).json({ msg: "Update Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server error" });
    }
};

export {taskadd, updateTask};
import Blog from "../models/blog.models.js";
import User from "../models/user.models.js"

const create = async (req, res) => {
    try {
        const { title, description } = req.body;
        const user = await User.findById(req.user.id);
        const data = await Blog.create({
            userId: req.user.id,
            title,
            description
        });
        user.blogId.push(data._id);
        await user.save();
        res.status(201).json({ msg: "Blog created successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const update = async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = req.params.id;
        const user = await User.findById(req.user.id);

        if (!user.blogId.includes(id)) {
            return res.status(401).json({ msg: "User unauthorized" });
        }

        const blog = await Blog.findById(id);

        if (title) {
            blog.title = title;
        }
        if (description) {
            blog.description = description;
        }

        await user.save();
        res.status(200).json({ msg: "Blog updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

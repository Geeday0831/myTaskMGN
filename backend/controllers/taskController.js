const Task = require('../models/taskModel');

// Get all tasks
const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

// Create a new task
const createTask = async (req, res, next) => {
    const { name, description, dueDate, priority, category } = req.body;
    const task = new Task({ name, description, dueDate, priority, category });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
};

// Update task status
const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        task.completed = req.body.completed;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllTasks, createTask, updateTask };

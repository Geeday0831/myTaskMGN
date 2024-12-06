const Task = require('../models/task');

// Fetch all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching tasks', error: err.message });
    }
};

// Create a new task
const createTask = async (req, res) => {
    try {
        const { name, description, dueDate, priority, category } = req.body;
        const newTask = new Task({ name, description, dueDate, priority, category });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: 'Error creating task', error: err.message });
    }
};

// Update a task's completion status
const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        task.completed = req.body.completed;
        await task.save();
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: 'Error updating task', error: err.message });
    }
};

module.exports = { getTasks, createTask, updateTask };

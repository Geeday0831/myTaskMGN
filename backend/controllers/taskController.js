const Task = require('../models/taskModel');  // Ensure the model is correctly imported

// Controller function to get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks', error });
  }
};

module.exports = { getAllTasks };

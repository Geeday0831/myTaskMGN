const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');  // Ensure this is correctly referenced

// Example route
router.get('/tasks', taskController.getAllTasks);  // Ensure `taskController.getAllTasks` is a valid function

module.exports = router;

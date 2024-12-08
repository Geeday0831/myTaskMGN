const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const authenticateToken = require('../middleware/authMiddleware');
const validateTask = require('../middleware/validateTask');

// Task routes
router.get('/', authenticateToken, tasksController.getAllTasks);
router.post('/', authenticateToken, validateTask, tasksController.createTask);
router.patch('/:id', authenticateToken, tasksController.updateTask);

module.exports = router;

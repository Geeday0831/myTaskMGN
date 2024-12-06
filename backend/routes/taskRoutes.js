const express = require('express');
const { getTasks, createTask, updateTask } = require('../controllers/taskController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Task routes
router.get('/tasks', verifyToken, getTasks);
router.post('/tasks', verifyToken, createTask);
router.patch('/tasks/:id', verifyToken, updateTask);

module.exports = router;

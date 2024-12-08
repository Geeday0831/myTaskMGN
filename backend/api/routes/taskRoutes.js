const express = require('express');
const verifyToken = require('../../middleware/authMiddleware');
const { createTask, getTasks, updateTask, deleteTask } = require('../../controllers/taskController');

const router = express.Router();

router.post('/', verifyToken, createTask);
router.get('/', verifyToken, getTasks);
router.patch('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;

// routes/tasks.js
const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Get Tasks (protected route)
router.get('/', auth, getTasks);

// Create Task (protected route)
router.post('/', auth, createTask);

// Update Task (protected route)
router.put('/:id', auth, updateTask);

// Delete Task (protected route)
router.delete('/:id', auth, deleteTask);

module.exports = router;

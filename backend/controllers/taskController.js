// controllers/taskController.js
const pool = require('../db');

// Get all tasks for a user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [req.user.userId]);
        res.json(tasks.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    const { text } = req.body;
    try {
        const newTask = await pool.query(
            'INSERT INTO tasks (text, user_id) VALUES ($1, $2) RETURNING *',
            [text, req.user.userId]
        );
        res.status(201).json(newTask.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update an existing task
exports.updateTask = async (req, res) => {
    const { text } = req.body;
    const { id } = req.params;
    try {
        const updatedTask = await pool.query(
            'UPDATE tasks SET text = $1 WHERE id = $2 AND user_id = $3 RETURNING *',
            [text, id, req.user.userId]
        );
        res.json(updatedTask.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM tasks WHERE id = $1 AND user_id = $2', [id, req.user.userId]);
        res.status(204).send();
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

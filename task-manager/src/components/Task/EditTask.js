import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById, updateTask } from '../../api/api'; // Assume you have these API methods
import { toast } from 'react-toastify';
import "../../Edittask.css";
const EditTask = () => {
    const { taskId } = useParams(); // Get the taskId from the URL
    const navigate = useNavigate();
    const [task, setTask] = useState({
        text: '',
        description: '',
        status: '',
        priority: '',
    });

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const taskData = await getTaskById(taskId); // Fetch the task data by ID
                setTask({
                    text: taskData.text,
                    description: taskData.description,
                    status: taskData.status,
                    priority: taskData.priority,
                });
            } catch (error) {
                toast.error('Failed to fetch task data.');
            }
        };

        fetchTask();
    }, [taskId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateTask(taskId, task); // Call the API to update the task
            toast.success('Task updated successfully!');
            navigate('/tasks'); // Redirect to the task list page
        } catch (error) {
            toast.error('Failed to update task.');
        }
    };

    return (
        <div className="edit-task-container">
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="text"
                        name="text"
                        value={task.text}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={task.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select
                        id="priority"
                        name="priority"
                        value={task.priority}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
};

export default EditTask;

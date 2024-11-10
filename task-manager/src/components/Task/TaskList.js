import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, deleteTask } from "../../api/api";
import { toast } from "react-toastify";
import "../../TaskList.css"; // Add the CSS file for styling

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const taskData = await getTasks();
                setTasks(taskData);
            } catch (error) {
                toast.error("Failed to fetch tasks.");
            }
        };
        fetchTasks();
    }, []);

    const handleDelete = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks(tasks.filter((task) => task.id !== taskId));
            toast.success("Task deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete task.");
        }
    };

    const handleEdit = (taskId) => {
        navigate(`/tasks/edit/${taskId}`);
    };

    // Helper function to display the status as text
    const getStatusText = (status) => {
        return status ? "Completed" : "Pending"; // Adjust the text based on the boolean value
    };

    return (
        <div className="task-list-container">
            <h2>Task List</h2>
            <button className="create-task-btn" onClick={() => navigate("/tasks/new")}>
                Create New Task
            </button>
            <ul className="task-list">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            <p>Title: {task.text}</p> {/* Displaying task title */}
                            <p>Description: {task.description}</p>
                            <p>Status: {getStatusText(task.status)}</p> {/* Displaying task status */}
                            <p>Priority: {task.priority}</p> {/* Displaying task priority */}
                            <div className="task-actions">
                                <button className="edit-btn" onClick={() => handleEdit(task.id)}>
                                    Edit
                                </button>
                                <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </ul>
        </div>
    );
};

export default TaskList;

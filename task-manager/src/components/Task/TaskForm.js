import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, updateTask } from "../../api/api";
import { toast } from "react-toastify";
import "../../TaskForm.css";
const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");
    const [priority, setPriority] = useState("Low");
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); // To get the task ID from the URL when editing

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            // You would fetch the task data from the API and set the state to pre-populate the form
            // Assuming you have a getTask API endpoint
            // Fetch task data based on `id` and update the state (e.g., setTitle, setDescription, etc.)
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description, status, priority };

        try {
            if (isEditing) {
                await updateTask(id, taskData);
                toast.success("Task updated successfully!");
            } else {
                await createTask(taskData);
                toast.success("Task created successfully!");
            }
            navigate("/tasks");
        } catch (error) {
            toast.error("Error occurred while saving the task.");
        }
    };

    return (
        <div>
            <h2>{isEditing ? "Edit Task" : "Create Task"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div>
                    <label>Priority:</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        required
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button type="submit">{isEditing ? "Update Task" : "Create Task"}</button>
            </form>
        </div>
    );
};

export default TaskForm;
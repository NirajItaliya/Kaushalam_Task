import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../TaskForm.css";  // Ensure you have the CSS imported

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [status, setStatus] = useState("Pending");
    const [loading, setLoading] = useState(false); // Loading state for button
    const [errorMessage, setErrorMessage] = useState(""); // Error message state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for required fields
        if (!title || !description) {
            setErrorMessage("Title and Description are required.");
            return;
        }

        setLoading(true); // Set loading state to true when the request starts
        setErrorMessage(""); // Reset any previous error message

        try {
            const response = await axios.post(
                "https://kaushalam-task-backend.vercel.app/api/tasks",
                { title, description, priority, status },
                {
                    headers: {
                        "x-auth-token": localStorage.getItem("token"),
                    },
                }
            );

            // Check if the response is successful
            if (response.data && response.data.success) {
                console.log("Task added:", response.data);
                setTitle("asas");
                setDescription("saaas");
                setPriority("Medium");
                setStatus("Pending");
                navigate("/task"); // Redirect to task list page
            } else {
                setErrorMessage("Failed to add task. Please try again.");
            }
        } catch (error) {
            console.error("Error adding task:", error);
            setErrorMessage("An error occurred. Please check your connection or try again.");
        } finally {
            setLoading(false); // Set loading state to false when request is complete
        }
    };

    return (
        <div className="task-form-container">
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit} className="task-form">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="task-input"
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="task-input"
                />
                <div className="select-container">
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="task-select"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="task-select"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <button type="submit" className="task-btn" disabled={loading}>
                    {loading ? "Adding Task..." : "Add Task"}
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
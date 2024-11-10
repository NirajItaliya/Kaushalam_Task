import axios from "axios";

const API_URL = "https://kaushalam-task-backend.vercel.app/api/tasks";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            "x-auth-token": token,
        },
    };
};

export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL, getAuthHeaders());
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};


export const createTask = async (taskData) => {
    try {
        const response = await axios.post(API_URL, taskData, getAuthHeaders());
        return response.data;
    } catch (error) {
        console.error("Error creating task:", error);
    }
};

export const updateTask = async (taskId, taskData) => {
    try {
        const response = await axios.put(
            `${API_URL}/${taskId}`,
            taskData,
            getAuthHeaders()
        );
        return response.data;
    } catch (error) {
        console.error("Error updating task:", error);
    }
};

export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(
            `${API_URL}/${taskId}`,
            getAuthHeaders()
        );
        return response.data;
    } catch (error) {
        console.error("Error deleting task:", error);
    }
};

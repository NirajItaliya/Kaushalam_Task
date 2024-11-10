import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Correct imports for toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";
import "../../styles.css"; // Import your custom styles here

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://kaushalam-task-backend.vercel.app/api/auth/login",
                { email, password }
            );
            localStorage.setItem("token", response.data.token);
            toast.success("Login successful!");
            navigate("/tasks");
        } catch (error) {
            console.error("Authentication failed:", error);
            toast.error("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
                <p>
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignIn;
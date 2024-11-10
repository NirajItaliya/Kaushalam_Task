import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import "../../SignUp.css";
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Error state for validation messages
    const navigate = useNavigate();

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}|;:'",<.>/?`~]).{6,}$/;
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate form data
    const validateForm = () => {
        if (!emailRegex.test(email)) {
            setError("Invalid email format.");
            return false;
        }

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters long and include an uppercase letter, lowercase letter, number, and special character.");
            return false;
        }

        if (!password || !username) {
            setError("Username and Password cannot be empty.");
            return false;
        }

        setError(""); // Clear error if all validations pass
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Don't submit if validation fails
        }

        try {
            await axios.post(
                "https://kaushalam-task-backend.vercel.app/api/auth/register",
                { username, email, password }
            );
            navigate("/login");
        } catch (error) {
            console.error("Registration failed:", error);
            setError("Username already taken. Please choose a different username.");
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
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
                <button type="submit">Sign Up</button>
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
            </form>
            <p>
                Already have an account? <a href="/login">Log In</a>
            </p>
        </div>
    );
};

export default SignUp;
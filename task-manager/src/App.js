import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import TaskList from "./components/Task//TaskList";
import TaskForm from "./components/Task/TaskForm";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {

    // Check if a token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Set authentication state to true
    } else {
      setIsAuthenticated(false); // No token means not authenticated
    }
  }, []);

  return (
    <Router>
      <Routes>
        {
          isAuthenticated ? <>
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/new" element={<TaskForm />} />
            <Route path="/tasks/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<Navigate path="/tasks"> </Navigate>} />
          </> :
            <>
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="*" element={<Navigate path="/register"> </Navigate>} />
            </>
        }
      </Routes>
    </Router>
  );
}

export default App;

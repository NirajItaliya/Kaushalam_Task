import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import TaskList from "./components/Task//TaskList";
import TaskForm from "./components/Task/TaskForm";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks/edit/:id" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;

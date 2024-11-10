# Task Management Application

This is a simple task management web application built with React.js for managing tasks. The app features authentication (sign-in and sign-up) and task management functionalities (CRUD operations), allowing users to register, log in, and manage their tasks securely.

### [Live Demo](https://kaushalam-task-app.vercel.app/register)

## Features

- **User Authentication**: Sign up and log in with secure token-based authentication.
- **Task Management**: 
  - **Create**: Add new tasks with details.
  - **Read**: View all tasks in a list format.
  - **Update**: Edit task details, including content, status, and priority.
  - **Delete**: Remove tasks.
- **Protected Routes**: Access to tasks is restricted to authenticated users.
- **Responsive Design**: Mobile-friendly layout.

## Tech Stack

- **Frontend**: React.js, React Router
- **Backend API**: Axios for API requests to backend
- **Storage**: Token management with localStorage
- **Styling**: CSS (for login, signup, and task pages)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NirajItaliya/Kaushalam_Task.git
   cd task-management-app
## API Endpoints

### Authentication Endpoints

- **Login**
  - **URL**: `POST https://kaushalam-task-backend.vercel.app/api/auth/login`
  - **Payload**:
    ```json
    { "email": "example@mail.com", "password": "password" }
    ```

- **Register**
  - **URL**: `POST https://kaushalam-task-backend.vercel.app/api/auth/register`
  - **Payload**:
    ```json
    { "username": "username", "email": "example@mail.com", "password": "password" }
    ```

### Task Management Endpoints

All task management endpoints require the `x-auth-token` header with the token obtained after login.

- **Get All Tasks**
  - **URL**: `GET https://kaushalam-task-backend.vercel.app/api/tasks`
  - **Headers**:
    ```json
    { "x-auth-token": "your-token-here" }
    ```

- **Create Task**
  - **URL**: `POST https://kaushalam-task-backend.vercel.app/api/tasks`
  - **Headers**:
    ```json
    { "x-auth-token": "your-token-here" }
    ```
  - **Payload**:
    ```json
    { "title": "Task Title", "description": "Task Description", "priority": "High", "status": "Pending" }
    ```

- **Update Task**
  - **URL**: `PUT https://kaushalam-task-backend.vercel.app/api/tasks/{taskId}`
  - **Headers**:
    ```json
    { "x-auth-token": "your-token-here" }
    ```
  - **Payload**:
    ```json
    { "title": "Updated Task Title", "description": "Updated Description", "priority": "Medium", "status": "Completed" }
    ```

- **Delete Task**
  - **URL**: `DELETE https://kaushalam-task-backend.vercel.app/api/tasks/{taskId}`
  - **Headers**:
    ```json
    { "x-auth-token": "your-token-here" }
    ```

Replace `{taskId}` with the specific task ID you wish to update or delete.
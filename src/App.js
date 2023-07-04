import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {isLoggedIn} from './components/utils/auth';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import TaskManager from './components/TaskManager';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';
import CreateTaskForm from './components/CreateTaskForm';
import EditTaskForm from './components/EditTaskForm';

function App() {
  return (
      <div className='App'>
        <Router>
          <Routes>
            <Route
                path="/"
                element={isLoggedIn() ? <TaskManager/> : <LoginForm/>}
            />
            <Route
                path="/task-manager"
                element={isLoggedIn() ? <TaskManager/> : <LoginForm/>}
            />
            <Route
                path="/categories"
                element={isLoggedIn() ? <CategoryList/> : <LoginForm/>}
            />
            <Route
                path="/tasks"
                element={isLoggedIn() ? <TaskList/> : <LoginForm/>}
            />
            <Route
                path="/create-task"
                element={isLoggedIn() ? <CreateTaskForm/> : <LoginForm/>}
            />
            <Route
                path="/edit-task/:taskId"
                element={isLoggedIn() ? <EditTaskForm/> : <LoginForm/>}
            />
            <Route path="/registration" element={<RegistrationForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;

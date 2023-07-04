import React from 'react';
import {Link} from 'react-router-dom';

const TaskManager = () => {
    return (
        <div>
            <h1>Task Manager</h1>
            <Link to="/categories">Categories</Link>
        </div>
    );
};

export default TaskManager;

export const createTask = async (taskData) => {
    try {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            throw new Error('Failed to create task');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to create task');
    }
};

export const updateTask = async (taskId, taskData) => {
    try {
        const response = await fetch(`/api/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            throw new Error('Failed to update task');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to update task');
    }
};

export const getTask = async (taskId) => {
    try {
        const response = await fetch(`/api/tasks/${taskId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch task');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch task');
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to login');
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Failed to register');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to register');
    }
};


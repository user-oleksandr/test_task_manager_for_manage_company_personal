import React from 'react';
import {useParams} from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {getTask, updateTask} from './utils/api';

const EditTaskForm = ({history}) => {
    const {taskId} = useParams();

    const initialValues = {
        name: '',
    };

    const handleSubmit = async (values, {setSubmitting}) => {
        try {
            await updateTask(taskId, values);
            history.push('/tasks');
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    const validateForm = (values) => {
        const errors = {};
        return errors;
    };

    React.useEffect(() => {
        const fetchTask = async () => {
            try {
                const task = await getTask(taskId);
                initialValues.name = task.name;
            } catch (error) {
                console.log(error);
            }
        };

        fetchTask();
    }, [taskId]);

    return (
        <div>
            <h1>Edit Task</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
                <Form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name"/>
                        <ErrorMessage name="name" component="div"/>
                    </div>
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </div>
    );
};

export default EditTaskForm;

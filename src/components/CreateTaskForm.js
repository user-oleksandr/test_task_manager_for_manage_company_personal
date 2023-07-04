import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {createTask} from './utils/api';

const CreateTaskForm = ({history}) => {
    const initialValues = {
        name: '',
    };

    const handleSubmit = async (values, {setSubmitting}) => {
        try {
            await createTask(values);
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

    return (
        <div>
            <h1>Create Task</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
                <Form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name"/>
                        <ErrorMessage name="name" component="div"/>
                    </div>
                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateTaskForm;

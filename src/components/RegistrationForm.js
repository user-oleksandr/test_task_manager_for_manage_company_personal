import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {registerUser} from './utils/api';

const RegistrationForm = ({history}) => {
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values, {setSubmitting}) => {
        try {
            await registerUser(values);
            history.push('/login');
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
            <h1>Registration</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
                <Form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <Field type="password" id="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;

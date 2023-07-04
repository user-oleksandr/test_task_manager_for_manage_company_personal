import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {loginUser} from './utils/api';

const LoginForm = ({history}) => {
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values, {setSubmitting}) => {
        try {
            await loginUser(values);
            history.push('/task-manager');
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
            <h1>Login</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
                <Form>
                    <div>
                        <Field type="email" id="email" name="email" placeholder="Enter your email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <div>
                        <Field type="password" id="password" name="password" placeholder="Enter your password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;

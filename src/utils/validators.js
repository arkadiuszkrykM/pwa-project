import React from 'react';

export const validateLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 10) {
        errors.username = 'Username must be 10 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (!/[A-Z]+/g.test(values.password)) {
        errors.password = 'You need one capital letter in your password';
    }
    return errors;
};

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

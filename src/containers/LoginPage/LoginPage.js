import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validateLoginForm, renderField, required } from '../../utils/validators';
// import { userAuth } from '../../store/actions/Login_Auth';

const LoginPage = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <Field name="username" component={renderField} type="text" validate={required} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component={renderField} type="text" />
        </div>
        <button type="submit">Login</button>
    </form>
);

export default reduxForm({ form: 'login', validateLoginForm })(LoginPage);

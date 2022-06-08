import React from 'react';
import { Link } from 'react-router-dom';
import AuthCont from '../../components/auth/AuthCont';
import routes from '../../../util/routes';
import { useFormik } from 'formik';

function LogIn() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: onFormSubmit,
  });

  function onFormSubmit(values: any) {
    const { username, password } = values;
    alert('submit');
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <AuthCont title="Log In To start meeting people!">
          <input
            className="auth-card__input"
            type="text"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />

          <input
            className="auth-card__input"
            type="text"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <button type="submit" className="btn">
            Submit
          </button>

          <Link className="autn-card__link" to={routes.signup.url}>
            Sign Up
          </Link>
        </AuthCont>
      </form>
    </>
  );
}

export default LogIn;

import React from 'react';
import { Link } from 'react-router-dom';
import AuthCont from '../../components/auth/AuthCont';
import routes from '../../../util/routes';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { LoginDTO } from '@finder/definitions';
import { LoginFormValidation } from './FormConfig';

function LogIn() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormValidation,
    onSubmit: onFormSubmit,
  });

  function onFormSubmit(values: LoginDTO) {
    const { email, password } = values;
    alert('submit');
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <AuthCont title="Log In To start meeting people!">
          {formik.touched.email && formik.errors.email ? (
            <p className="auth-card__input-error ">{formik.errors.email}</p>
          ) : null}
          <input
            className="auth-card__input"
            type="text"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.password && formik.errors.password ? (
            <p className="auth-card__input-error ">{formik.errors.password}</p>
          ) : null}
          <input
            className="auth-card__input"
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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

import React from 'react';
import { Link } from 'react-router-dom';
import AuthCont from '../../components/auth/AuthCont';
import routes from '../../../util/routes';

function LogIn() {
  return (
    <>
      <AuthCont title="Log In To start meeting people!">
        <input
          className="auth-card__input"
          type="text"
          placeholder="Username"
        />

        <input
          className="auth-card__input"
          type="text"
          placeholder="Password"
        />

        <button className="btn">Submit</button>

        <Link className="autn-card__link" to={routes.signup.url}>
          Sign Up
        </Link>
      </AuthCont>
    </>
  );
}

export default LogIn;

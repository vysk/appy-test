import React from 'react';
//import { Formik } from 'formik';
import '../App.css';

function Login(props) {
	 
  return (
    <div className="login">
      <form>
          <label htmlFor="email">Email:</label>
          <input name="email" type="text" placeholder="Enter your email" />

          <label htmlFor="email">Password:</label>
          <input name="password"
          		 type="password"
          		 placeholder="Password"
          		 />
          <button type="submit">
          Login
          </button>
      </form>
    </div>
  );
}

export default Login;
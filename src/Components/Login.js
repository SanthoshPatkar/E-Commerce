import React, { useState } from "react";
import "../CSS/login.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createuserwithemailandpassword(email, Password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => error.message);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail or Mobile Number</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signin">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon-Clone Conditions of Use and
            Privacy Notice.
          </p>
        </form>
      </div>
      <p>New to Amazon?</p>
      <button type="submit" onClick={register} className="login_register">
        create your amazon account
      </button>
    </div>
  );
}

export default Login;
